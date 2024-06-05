import React, { useEffect } from 'react';
import StepText from './StepText';
import PrimaryBtn from './PrimaryBtn';
import Radio from './Radio';

function Behandling({ onTreatmentSelect, setStep, selectedTreatment }) {
  const defaultTreatment = 'Nyt sæt Forlængelse gele / akrylgele';

  // Use useEffect to set the default selected treatment when the component mounts
  useEffect(() => {
    if (!selectedTreatment) {
      onTreatmentSelect(defaultTreatment);
    }
  }, [selectedTreatment, onTreatmentSelect]);

  return (
    <div className=" flex flex-col md:items-center">
      <StepText header={'Vælg behandling'} smallText={'Design m.m aftales på dagen'} />
      <fieldset className="space-y-4 text-sm font leading-6 text-lgreen">
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={'Nyt sæt Forlængelse gele / akrylgele'}
          id={'nytsæt1'}
          checked={selectedTreatment === 'Nyt sæt Forlængelse gele / akrylgele'}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={'Opfyldning gele / akrylgele'}
          id={'opfyld1'}
          checked={selectedTreatment === 'Opfyldning gele / akrylgele'}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={'Nyt sæt gelpolish'}
          id={'nytsæt2'}
          checked={selectedTreatment === 'Nyt sæt gelpolish'}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={'Opfyldning gelpolish'}
          id={'opfyld2'}
          checked={selectedTreatment === 'Opfyldning gelpolish'}
        />
        <Radio
          onTreatmentSelect={onTreatmentSelect}
          behandling={'Aftagning'}
          id={'aftag'}
          checked={selectedTreatment === 'Aftagning'}
        />
      </fieldset>
      <div className={`${selectedTreatment === null ? 'hidden' : ''}`}>
        <PrimaryBtn setStep={setStep} text={'Vælg dag og tid'} />
      </div>
    </div>
  );
}

export default Behandling;
