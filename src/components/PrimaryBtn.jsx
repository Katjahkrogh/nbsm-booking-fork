import React from 'react'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight:  "400",
  display: "swap",
});

function PrimaryBtn({text}) {
  return (
    <div
      className={`w-96 md:w-[500px] my-8 py-4 uppercase grid place-content-center text-green border-green border hover:bg-lightGreen hover:border-lightGreen hover:text-bg rounded-xl cursor-pointer ${montserrat.className}`}
    >
      {text}
    </div>
  );
}

export default PrimaryBtn