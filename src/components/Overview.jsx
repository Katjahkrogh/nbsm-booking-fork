import React from 'react';
import StepText from './StepText';
import PrimaryBtn from './PrimaryBtn';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function Overview({ selectedBooking, selectedTreatment, setStep }) {
  return (
    <div className="flex flex-col md:items-center mb-20 text-green ">
      <StepText header={'Bekræft din booking'} smallText={'Du modtager en mail med endelig bekræftelse'} />

      {selectedBooking && (
        <div className="mb-10">
          {' '}
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

      <Link className="w-full md:w-[500px] underline" href={''}>
        Bookingspolitik
      </Link>

      <div className="flex items-top w-full md:w-[500px] ">
        <label htmlFor={'politik'} className=" cursor-pointer rounded-xl py-4 pl-4 text-sm text-lightGreen relative flex items-end ">
          <input type="checkbox" name="politik" id={'politik'} className="before:content[''] peer -ml-4 mr-4 mt-2 relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-lighGreen transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:bg-pink-500 hover:before:opacity-10" />
          <div className="pointer-events-none absolute top-[57%] left-[2.5%] -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth={1}>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
          </div>
          Jeg har læst og accepterer bookings og afbudspolitikken
        </label>
      </div>
      <PrimaryBtn setStep={setStep} text={"Bekræft booking"} type={"submit"} id={"bookingForm"} />
    </div>
  );
}

export default Overview;
