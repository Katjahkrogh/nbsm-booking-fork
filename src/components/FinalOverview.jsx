import React from 'react';
import StepText from './StepText';

function FinalOverview({ selectedBooking, selectedTreatment, userName, userEmail }) {
  return (
    <section className="flex flex-col md:items-center">
      <div className="w-full md:w-[500px]">
        <StepText header={`Kære ${userName}`} />
        <h2>Jeg har modtaget din booking, og jeg glæder mig til at se dig i klinikken 💅🏼</h2>
      </div>
      {selectedBooking && (
        <div className="my-10">
          <h3 className="my-4 text-xl">DIN TID</h3>
          <div className="bg-lightBeige w-full md:w-[500px] rounded-xl py-6 px-6 flex flex-col gap-4">
            <p className="text-lg">{selectedTreatment}</p>
            <div className="flex gap-6 text-lightGreen text-sm">
              <p>{selectedBooking.day}</p>
              <p>{selectedBooking.time}</p>
            </div>
          </div>
        </div>
      )}
      <p className="text-lightGreen text-xs">
        Du vil modtage en booking bekræftelse på din mail: {userEmail}
      </p>
    </section>
  );
}

export default FinalOverview;
