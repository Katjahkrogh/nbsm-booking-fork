'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Startpage from './Startpage';
import LogInd from './logInd';
import OpretBruger from './OpretBruger';
import Calender from './Calender';

function Wrapper() {
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      const url = `https://nckxtdsipzwbtkcrrjbe.supabase.co/rest/v1/Tider?select=*`;
      const options = {
        method: 'GET',
        headers: {
          apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ja3h0ZHNpcHp3YnRrY3JyamJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTY4NzgsImV4cCI6MjAzMDU3Mjg3OH0.YvIHTrtBTrOQiKB79QaqdOT5iOxpyeui20rfJ5t2CdQ',
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setBooking(data);
    };

    fetchBookingData();
  }, []);
  return (
    <div className="px-10">
      <Startpage />
      <LogInd />
      <OpretBruger />
      <Calender />
    </div>
  );
}

export default Wrapper;
