import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';

function OpretBruger({ setStep, onNameChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'navn') {
      onNameChange(value);
    }
  };
  return (
    <div className="flex flex-col md:items-center">
      <StepText header={'Opret en ny profil'} />
      <Input
        type={'text'}
        htmlFor={'navn'}
        name={'navn'}
        placeholder={'Fornavn'}
        onChange={handleChange}
      />
      <Input type={'email'} htmlFor={'email'} name={'email'} placeholder={'Email'} />
      <Input type={'date'} htmlFor={'føs'} name={'føs'} placeholder={'Fødselsdag'} />
      <Input type={'text'} htmlFor={'kode'} name={'kode'} placeholder={'Adgangskode'} />
      <PrimaryBtn setStep={setStep} text={'Opret bruger'} />
    </div>
  );
}

export default OpretBruger;
