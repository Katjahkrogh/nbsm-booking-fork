import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function StepText({ header, smallText }) {
  return (
    <div>
      <h1
        className={`text-2xl w-full md:w-[500px] md:text-3xl text-green mb-2 mt-5 ${montserrat.className}`}>
        {header}
      </h1>
      <p className="text-sm md:text-base text-green mb-8">{smallText}</p>
    </div>
  );
}

export default StepText;
