import React from 'react';
import StepText from './StepText';
import PrimaryBtn from './PrimaryBtn';
import Radio from './Radio';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function Behandling({ onTreatmentSelect, setStep }) {
  return (
    <div className=" flex flex-col md:items-center">
      <StepText
        header={"Vælg behandling"}
        smallText={"Design m.m aftales på dagen"}
      />
      <ol
        className={`space-y-4 text-sm font leading-6 text-lgreen ${openSans.className}`}
      >
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={"Nyt sæt Forlængelse gele / akrylgele"}
          id={"nytsæt1"}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={"Opfyldning gele / akrylgele"}
          id={"opfyld1"}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={"Nyt sæt gelpolish"}
          id={"nytsæt2"}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={"Opfyldning gelpolish"}
          id={"opfyld2"}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={"Aftagning"}
          id={"aftag"}
        />
      </ol>
      <PrimaryBtn setStep={setStep} text={"Gå til tid"} />
    </div>
  );
}

export default Behandling;
