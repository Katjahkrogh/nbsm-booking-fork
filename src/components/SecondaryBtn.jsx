import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
});

function SecondaryBtn({ text }) {
  return (
    <div
      className={`w-full  md:w-[500px] my-8 py-4 uppercase grid place-content-center text-bg border-green bg-green border rounded-xl hover:bg-lightGreen hover:border-lightGreen cursor-pointer transition-all duration-200 ${montserrat.className}`}>
      {text}
    </div>
  );
}

export default SecondaryBtn;
