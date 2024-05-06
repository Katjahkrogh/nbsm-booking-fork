import React from 'react'
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});


function SecondaryBtn({text}) {
  return (
    <div
      className={`w-96 md:w-[500px] my-8 py-4 uppercase grid place-content-center text-bg border-green bg-green border rounded-xl hover:bg-lightGreen hover:border-lightGreen cursor-pointer ${montserrat.className}`}
    >
      {text}
    </div>
  );
}

export default SecondaryBtn