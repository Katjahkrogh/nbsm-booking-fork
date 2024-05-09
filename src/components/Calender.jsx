import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { add, eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameDay, isSameMonth, isBefore, isToday, parse, startOfToday } from 'date-fns';
import { da } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import { Montserrat, Open_Sans } from 'next/font/google';
import StepText from './StepText';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Calender({ onTimeSelect }) {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  let [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const url = `https://nckxtdsipzwbtkcrrjbe.supabase.co/rest/v1/Tider?select=*`;
      const options = {
        method: 'GET',
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3h0ZHNpcHp3YnRrY3JyamJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTY4NzgsImV4cCI6MjAzMDU3Mjg3OH0.YvIHTrtBTrOQiKB79QaqdOT5iOxpyeui20rfJ5t2CdQ',
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setTimes(data);
    };

    fetchTimes();
  }, []);

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  let selectedDayTimes = times.filter((time) => isSameDay(parse(time.day, 'yyyy-MM-dd', new Date()), selectedDay));

  function handleTimeClick(day, time) {
    // Kalder funktionen modtaget som prop og sender data tilbage
    onTimeSelect(day, time);
  }

  return (
    <div className={`py-16 ${openSans.className}`}>
      <div className="max-w-md  mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <StepText header={'Vælg dag og tid'} />
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-beige">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className={`flex-auto text-green capitalize ${montserrat.className}`}>{format(firstDayCurrentMonth, 'MMMM yyyy', { locale: da })}</h2>
              <button type="button" onClick={previousMonth} className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-lightGreen hover:text-green">
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button onClick={nextMonth} type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-lightGreen hover:text-green">
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-lightGreen">
              <div>M</div>
              <div>T</div>
              <div>O</div>
              <div>T</div>
              <div>F</div>
              <div>L</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div key={day.toString()} className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5')}>
                  <button type="button" onClick={() => setSelectedDay(day)} className={classNames(isEqual(day, selectedDay) && 'text-white', !isEqual(day, selectedDay) && isToday(day) && 'text-pink-500', !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && (isBefore(day, today) ? 'text-lightGreen' : 'text-green'), !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-400', isEqual(day, selectedDay) && isToday(day) && 'bg-pink-500', isEqual(day, selectedDay) && !isToday(day) && 'bg-green', !isEqual(day, selectedDay) && 'hover:bg-beige', (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold', 'mx-auto flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200')}>
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>
                  <div className="w-1 h-1 mx-auto mt-1">{times.some((time) => isSameDay(parse(time.day, 'yyyy-MM-dd', new Date()), day)) && <div className="w-1 h-1 rounded-full bg-pink-500"></div>}</div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className={`font-semibold text-green ${montserrat.className}`}>
              Ledige tider d.
              <time className="capitalize" dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, ' dd. MMMM', { locale: da })}
              </time>
            </h2>
            <ol className="mt-10 space-y-4 text-sm font leading-6 text-green">{selectedDayTimes.length > 0 ? selectedDayTimes.map((time) => <Times time={time} key={time.id} handleTimeClick={handleTimeClick} />) : <p>Ingen ledige tider</p>}</ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Times({ time, handleTimeClick }) {
  let startDateTime = new Date(`${time.day}T${time.time}`);
  let formattedDateTime = format(startDateTime, 'HH:mm', {
    timeZone: 'Europe/Copenhagen',
  });

  return (
    <div className="w-full md:w-32 rounded-xl bg-lightBeige">
      <input type="radio" name="times" id={time.id} value={formattedDateTime} className="peer hidden" onClick={() => handleTimeClick(time.day, time.time)} />
      <label htmlFor={time.id} className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-green peer-checked:font-semibold peer-checked:text-white peer-hover:bg-beige peer-checked:hover:bg-green transition-all duration-200">
        <time dateTime={startDateTime.toISOString()}>{formattedDateTime}</time>
      </label>
    </div>
  );
}

let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'];
