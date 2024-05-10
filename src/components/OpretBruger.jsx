import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function OpretBruger({ setStep }) {

  return (
    <div className="flex flex-col md:items-center">
      <StepText header={"Opret en ny profil"} />
      <Input
        type={"text"}
        htmlFor={"navn"}
        name={"navn"}
        placeholder={"Fornavn"}
      />
      <Input
        type={"email"}
        htmlFor={"email"}
        name={"email"}
        placeholder={"Email"}
      />
      <Input
        type={"date"}
        htmlFor={"føs"}
        name={"føs"}
        placeholder={"Fødselsdag"}
      />
      <Input
        type={"text"}
        htmlFor={"kode"}
        name={"kode"}
        placeholder={"Adgangskode"}
      />
      <button
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
        }}
        className={`w-full md:w-[500px] my-8 py-4 uppercase grid place-content-center text-green border-green border hover:bg-green hover:border-green hover:text-bg rounded-xl cursor-pointer transition-all duration-200 ${montserrat.className}`}
      >
        Bekræft booking
      </button>
    </div>
  );
}

export default OpretBruger;
