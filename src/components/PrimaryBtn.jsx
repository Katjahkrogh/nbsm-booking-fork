import React from 'react'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight:  "400",
  display: "swap",
});

function PrimaryBtn({text, setStep, type, id}) {
  return (
    <button
      onClick={() => {
        setStep((prevStep) => prevStep + 1);
      }}
      type={type}
      id={id}
      className={`w-full md:w-[500px] my-8 py-4 uppercase grid place-content-center text-green border-green border hover:bg-green hover:border-green hover:text-bg rounded-xl cursor-pointer transition-all  ${montserrat.className}`}
    >
      {text}
    </button>
  );
}

export default PrimaryBtn