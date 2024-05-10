import React from 'react';

function FinalOverview({ selectedBooking, selectedTreatment }) {
  return (
    <>
      {selectedBooking && (
        <div className="mb-10">
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
    </>
  );
}

export default FinalOverview;
