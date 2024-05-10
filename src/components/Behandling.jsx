import React from 'react';
import StepText from './StepText';
import Radio from './Radio';
import { Open_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function Behandling({ onTreatmentSelect, setStep }) {
  return (
    <div className=" flex flex-col md:items-center">
      <StepText header={'Vælg behandling'} smallText={'Design m.m aftales på dagen'} />
      <ol className={`space-y-4 text-sm font leading-6 text-lgreen ${openSans.className}`}>
        <Radio onTreatmentSelect={onTreatmentSelect} behandling={'Nyt sæt Forlængelse gele / akrylgele'} id={'nytsæt1'} />
        <Radio onTreatmentSelect={onTreatmentSelect} behandling={'Opfyldning gele / akrylgele'} id={'opfyld1'} />
        <Radio onTreatmentSelect={onTreatmentSelect} behandling={'Nyt sæt gelpolish'} id={'nytsæt2'} />
        <Radio onTreatmentSelect={onTreatmentSelect} behandling={'Opfyldning gelpolish'} id={'opfyld2'} />
        <Radio onTreatmentSelect={onTreatmentSelect} behandling={'Aftagning'} id={'aftag'} />
      </ol>
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

export default Behandling;
