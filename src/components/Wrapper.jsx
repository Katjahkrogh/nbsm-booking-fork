'use client';
import React, {useState, useEffect} from 'react';
import Startpage from './Startpage';
import LogInd from './logInd';
import OpretBruger from './OpretBruger';
import Calender from './Calender';
import Behandling from './Behandling';
import Overview from './Overview';

function Wrapper() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [selectedTreatment, setSelectedTreatment] = useState(null);

  function handleTimeSelect(day, time) {
    setSelectedBooking({ day, time });
  }

  function handleTreatmentSelect(selectedTreatment) {
    setSelectedTreatment( selectedTreatment );
  }

  useEffect(() => {
    console.log(selectedTreatment);
  }, [selectedTreatment]); // Lytter efter ændringer i selectedTreatment

  useEffect(() => {
    console.log(selectedBooking);
  }, [selectedBooking]); // Lytter efter ændringer i selectedTreatment

  return (
    <div className="px-10">
      <Startpage />
      <LogInd />
      <OpretBruger />
      <Behandling onTreatmentSelect={handleTreatmentSelect} />
      <Calender onTimeSelect={handleTimeSelect} />
      <Overview
        selectedBooking={selectedBooking}
        selectedTreatment={selectedTreatment}
      />
    </div>
  );
}

export default Wrapper;
