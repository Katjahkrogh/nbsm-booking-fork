import React from 'react'
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});


function StepText({header, smallText}) {
  return (
    <div>
      <h1 className={`text-2xl w-full md:w-[500px] md:text-3xl text-green mb-2 mt-20 ${montserrat.className}`}>
        {header}
      </h1>
      <h2 className={`text-sm md:text-base text-lightGreen mb-8 ${openSans.className}`}>
        {smallText}
      </h2>
    </div>
  );
}

export default StepText