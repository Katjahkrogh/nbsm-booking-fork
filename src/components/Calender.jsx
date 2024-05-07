import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { add, eachDayOfInterval, endOfMonth, format, getDay, isEqual, isSameDay, isSameMonth, isToday, parse, startOfToday } from 'date-fns';
import { da } from 'date-fns/locale';
import { Fragment, useState, useEffect } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  let [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const url = `https://nckxtdsipzwbtkcrrjbe.supabase.co/rest/v1/Tider?select=*`;
      const options = {
        method: 'GET',
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3h0ZHNpcHp3YnRrY3JyamJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTY4NzgsImV4cCI6MjAzMDU3Mjg3OH0.YvIHTrtBTrOQiKB79QaqdOT5iOxpyeui20rfJ5t2CdQ',
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setMeetings(data);
    };

    fetchMeetings();
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

  let selectedDayMeetings = meetings.filter((meeting) => isSameDay(parse(meeting.day, 'yyyy-MM-dd', new Date()), selectedDay));

  return (
    <div className="py-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900 capitalize">{format(firstDayCurrentMonth, 'MMMM yyyy', { locale: da })}</h2>
              <button type="button" onClick={previousMonth} className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button onClick={nextMonth} type="button" className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
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
                  <button type="button" onClick={() => setSelectedDay(day)} className={classNames(isEqual(day, selectedDay) && 'text-white', !isEqual(day, selectedDay) && isToday(day) && 'text-pink-500', !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-gray-900', !isEqual(day, selectedDay) && !isToday(day) && !isSameMonth(day, firstDayCurrentMonth) && 'text-gray-400', isEqual(day, selectedDay) && isToday(day) && 'bg-pink-500', isEqual(day, selectedDay) && !isToday(day) && 'bg-green', !isEqual(day, selectedDay) && 'hover:bg-gray-200', (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold', 'mx-auto flex h-8 w-8 items-center justify-center rounded-full')}>
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>
                  <div className="w-1 h-1 mx-auto mt-1">{meetings.some((meeting) => isSameDay(parse(meeting.day, 'yyyy-MM-dd', new Date()), day)) && <div className="w-1 h-1 rounded-full bg-pink-500"></div>}</div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900">
              Ledige tider
              <time className="capitalize" dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {format(selectedDay, ' dd. MMM', { locale: da })}
              </time>
            </h2>
            <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">{selectedDayMeetings.length > 0 ? selectedDayMeetings.map((meeting) => <Meeting meeting={meeting} key={meeting.id} />) : <p>Ingen ledige tider</p>}</ol>
          </section>
        </div>
      </div>
    </div>
  );
}

function Meeting({ meeting }) {
  let startDateTime = new Date(`${meeting.day}T${meeting.time}`);
  let formattedDateTime = format(startDateTime, 'HH:mm', { timeZone: 'Europe/Copenhagen' });

  return (
    <li className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.name}</p>
        <p className="mt-0.5">
          <time dateTime={startDateTime.toISOString()}>{formattedDateTime}</time>
        </p>
      </div>
    </li>
  );
}

let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'];
