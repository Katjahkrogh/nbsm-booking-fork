'use client';
import React, { useState, useEffect, useRef } from 'react';
import KundeInfo from './KundeInfo';
import Calender from './Calender';
import Behandling from './Behandling';
import Overview from './Overview';
import { isSameDay, parse, startOfToday } from 'date-fns';
import FinalOverview from './FinalOverview';
import emailjs from '@emailjs/browser';
import ProgressBar from './ProgressBar';

function Wrapper() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const formRef = useRef();
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const url = `https://nckxtdsipzwbtkcrrjbe.supabase.co/rest/v1/Tider?select=*`;
      const options = {
        method: 'GET',
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3h0ZHNpcHp3YnRrY3JyamJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTY4NzgsImV4cCI6MjAzMDU3Mjg3OH0.YvIHTrtBTrOQiKB79QaqdOT5iOxpyeui20rfJ5t2CdQ',
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      const filteredData = data.filter((time) => !time.reservation);
      setTimes(filteredData);
    };

    fetchTimes();

    //Henter data hvert minut
    const interval = setInterval(fetchTimes, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  function handleTimeSelect(day, time) {
    setSelectedBooking({ day, time });
  }

  function handleTreatmentSelect(selectedTreatment) {
    setSelectedTreatment(selectedTreatment);
  }

  useEffect(() => {
    console.log(selectedTreatment);
  }, [selectedTreatment]);

  useEffect(() => {
    console.log(selectedBooking);
  }, [selectedBooking]);

  async function submit(evt) {
    evt.preventDefault();

    // Find den tid, som brugeren har valgt på den valgte dag
    const selectedTimeData = times.find(
      (time) =>
        isSameDay(parse(time.day, 'yyyy-MM-dd', new Date()), selectedDay) &&
        time.time === selectedBooking.time
    );

    // Hvis tiden blev fundet, opdater reservationen
    if (selectedTimeData) {
      // Opret en kopi af den eksisterende reservation
      const updatedReservation = { ...selectedTimeData.reservation };

      // Opdater reservationen med de nye oplysninger, herunder navn og email
      const formData = new FormData(evt.target);
      const navn = formData.get('navn');
      const email = formData.get('email');

      const reservationData = {
        navn: navn,
        email: email,
      };

      updatedReservation.reservation = reservationData;

      const updatedReservationJSON = JSON.stringify(updatedReservation);

      let supabaseHeader = {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3h0ZHNpcHp3YnRrY3JyamJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTY4NzgsImV4cCI6MjAzMDU3Mjg3OH0.YvIHTrtBTrOQiKB79QaqdOT5iOxpyeui20rfJ5t2CdQ',
        Accept: 'application/json',
        Prefer: 'return=representation',
        'Content-Type': 'application/json',
      };

      let supabaseResponse = await fetch(
        `https://nckxtdsipzwbtkcrrjbe.supabase.co/rest/v1/Tider?id=eq.${selectedTimeData.id}`,
        {
          method: 'PATCH',
          body: updatedReservationJSON,
          headers: supabaseHeader,
        }
      );

      let supabaseData = await supabaseResponse.json();
      console.log(supabaseData);

      // Send email via EmailJS
      emailjs
        .sendForm('service_4ur605f', 'template_9oqz2lt', formRef.current, '2lzphIXp9Q4fi2F_X')
        .then(
          () => {
            console.log('SUCCESS!');
            formRef.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }
  }

  return (
    <div className="px-10">
      <div className={`${step != 4 ? '' : 'hidden'} flex justify-center items-center`}>
        <ProgressBar step={step} />
      </div>
      <form ref={formRef} onSubmit={submit} id="bookingForm">
        <div className={`${step === 0 ? '' : 'hidden'}`}>
          <Behandling
            onTreatmentSelect={handleTreatmentSelect}
            selectedTreatment={selectedTreatment}
            setStep={setStep}
          />
        </div>
        <div className={`${step === 1 ? '' : 'hidden'}`}>
          <Calender
            onTimeSelect={handleTimeSelect}
            times={times}
            selectedBooking={selectedBooking}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            today={today}
            setStep={setStep}
          />
        </div>
        <div className={`${step === 2 ? '' : 'hidden'}`}>
          <KundeInfo setStep={setStep} onNameChange={setUserName} onEmailChange={setuserEmail} />
        </div>
        <div className={`${step === 3 ? '' : 'hidden'}`}>
          <Overview
            setStep={setStep}
            selectedBooking={selectedBooking}
            selectedTreatment={selectedTreatment}
          />
        </div>
        {selectedBooking && (
          <>
            <input type="hidden" name="booking_behandling" value={selectedTreatment} />
            <input type="hidden" name="booking_date" value={selectedBooking.day} />
            <input type="hidden" name="booking_time" value={selectedBooking.time} />
          </>
        )}
        <div className={`${step === 4 ? '' : 'hidden'}`}>
          <FinalOverview
            selectedBooking={selectedBooking}
            selectedTreatment={selectedTreatment}
            userName={userName}
            userEmail={userEmail}
          />
        </div>
      </form>
    </div>
  );
}

export default Wrapper;
