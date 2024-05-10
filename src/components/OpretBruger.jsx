import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';
import { Montserrat } from 'next/font/google';
import { useState } from 'react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function OpretBruger({ setStep }) {
  const [infoForm, setInfoForm] = useState({
    navn: '',
    email: '',
  });

  const handleChange = (e) => {
    setInfoForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="flex flex-col md:items-center">
      <StepText header={'Opret en ny profil'} />
      <label htmlFor="navn" className="text-sm w-full  md:w-[500px] ">
        <input type="text" id="navn" placeholder="Navn" name="navn" value={infoForm.navn} onChange={handleChange} required className="w-full md:w-[500px] my-4 py-4 px-5 bg-bg border placeholder-lightGreen border-[#f0eae2] rounded-xl " />
      </label>
      <label htmlFor="email" className="text-sm w-full  md:w-[500px] ">
        <input type="email" placeholder="Email" id="email" name="email" value={infoForm.email} onChange={handleChange} required className="w-full md:w-[500px] my-4 py-4 px-5 bg-bg border placeholder-lightGreen border-[#f0eae2] rounded-xl " />
      </label>
      <Input type={'date'} htmlFor={'føs'} name={'føs'} placeholder={'Fødselsdag'} />
      <Input type={'text'} htmlFor={'kode'} name={'kode'} placeholder={'Adgangskode'} />
      <button
        onClick={() => {
          setStep((prevStep) => prevStep + 1);
        }}
        className={`w-full md:w-[500px] my-8 py-4 uppercase grid place-content-center text-green border-green border hover:bg-green hover:border-green hover:text-bg rounded-xl cursor-pointer transition-all duration-200 ${montserrat.className}`}>
        Bekræft booking
      </button>
    </div>
  );
}

export default OpretBruger;
