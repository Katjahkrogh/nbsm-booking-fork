'use client';
import React, { useState, useEffect } from 'react';
import Startpage from './Startpage';
import LogInd from './logInd';
import OpretBruger from './OpretBruger';
import Calender from './Calender';
import Behandling from './Behandling';
import Overview from './Overview';
import { isSameDay, parse, startOfToday } from 'date-fns';

function Wrapper() {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [step, setStep] = useState(0);
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
  }, []);

  function handleTimeSelect(day, time) {
    setSelectedBooking({ day, time });
  }

  function handleTreatmentSelect(selectedTreatment) {
    setSelectedTreatment(selectedTreatment);
  }

  useEffect(() => {
    console.log(selectedTreatment);
  }, [selectedTreatment]); // Lytter efter ændringer i selectedTreatment

  useEffect(() => {
    console.log(selectedBooking);
  }, [selectedBooking]); // Lytter efter ændringer i selectedTreatment

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

      // Konverter reservationen til JSON-format
      const updatedReservationJSON = JSON.stringify(updatedReservation);

      // Opret fetch-headeren
      let supabaseHeader = {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3h0ZHNpcHp3YnRrY3JyamJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTY4NzgsImV4cCI6MjAzMDU3Mjg3OH0.YvIHTrtBTrOQiKB79QaqdOT5iOxpyeui20rfJ5t2CdQ',
        Accept: 'application/json',
        Prefer: 'return=representation',
        'Content-Type': 'application/json',
      };

      // Send PATCH-anmodning til Supabase REST API for at opdatere reservationen
      let supabaseResponse = await fetch(
        `https://nckxtdsipzwbtkcrrjbe.supabase.co/rest/v1/Tider?id=eq.${selectedTimeData.id}`,
        {
          method: 'PATCH',
          body: updatedReservationJSON,
          headers: supabaseHeader,
        }
      );

      // Log opdaterede data til konsollen
      let supabaseData = await supabaseResponse.json();
      console.log(supabaseData);
    }
  }

  return (
    <div className="px-10">
      <form onSubmit={submit} id="bookingForm">
        {/* <Startpage />
        <LogInd /> */}
        <div className={`flex flex-col m-10 sm:px-10 ${step === 0 ? '' : 'hidden'}`}>
          <OpretBruger setStep={setStep} />
        </div>
        <div className={`flex flex-col m-10 sm:px-10 ${step === 1 ? '' : 'hidden'}`}>
          <Behandling onTreatmentSelect={handleTreatmentSelect} setStep={setStep} />
        </div>
        <div className={`flex flex-col m-10 sm:px-10 ${step === 2 ? '' : 'hidden'}`}>
          <Calender
            onTimeSelect={handleTimeSelect}
            times={times}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            today={today}
            setStep={setStep}
          />
        </div>
        <div className={`flex flex-col m-10 sm:px-10 ${step === 3 ? '' : 'hidden'}`}>
          <Overview selectedBooking={selectedBooking} selectedTreatment={selectedTreatment} />
        </div>
      </form>
    </div>
  );
}

export default Wrapper;
