'use client';
import React, {useState, useEffect} from 'react';
import Startpage from './Startpage';
import LogInd from './logInd';
import OpretBruger from './OpretBruger';
import Calender from './Calender';
import Behandling from './Behandling';

function Wrapper() {
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [selectedTreatment, setSelectedTreatment] = useState(null);

  function handleTimeSelect(day, time) {
    setSelectedBooking({ day, time });
  }

  function handleTreatmentSelect(treatment) {
    setSelectedTreatment({ treatment });
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
    </div>
  );
}

export default Wrapper;
