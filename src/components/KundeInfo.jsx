'use client';
import React, { useState } from 'react';
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';

function KundeInfo({ setStep, onNameChange, onEmailChange }) {
  const [navn, setNavn] = useState('');
  const [email, setEmail] = useState('');
  const [fødselsdag, setFødselsdag] = useState('');
  const [telefon, setTelefon] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'navn') {
      onNameChange(value);
      setNavn(value);
    } else if (name === 'email') {
      onEmailChange(value);
      setEmail(value);
    } else if (name === 'føs') {
      setFødselsdag(value);
    } else if (name == 'telefon') {
      setTelefon(value);
    }
  };

  return (
    <div className="flex flex-col md:items-center">
      <StepText header={'Indtast dine oplysning'} />
      <Input
        type={'text'}
        htmlFor={'fornavn'}
        name={'navn'}
        placeholder={'Fornavn'}
        minLength={'2'}
        aria={'Indtast dit navn'}
        onChange={handleChange}
        className={
          'valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400'
        }
      />
      <Input
        type={'email'}
        htmlFor={'mail'}
        name={'email'}
        placeholder={'Email'}
        aria={'Indtast din email'}
        minLength={'2'}
        onChange={handleChange}
        className={
          'valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400'
        }
      />
      <Input
        type={'date'}
        htmlFor={'fødselsdag'}
        aria={'Indtast din fødselsdag'}
        name={'føs'}
        placeholder={'Fødselsdag'}
        onChange={handleChange}
      />

      <Input
        type={'text'}
        htmlFor={'telefonnummer'}
        aria={'Indtast dit telefonnummer'}
        name={'telefon'}
        placeholder={'Telefon'}
        minLength={'2'}
        onChange={handleChange}
        className={
          'valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400'
        }
      />
      {navn !== '' && fødselsdag !== '' && email !== '' && telefon !== '' && (
        <PrimaryBtn setStep={setStep} text={'Gå til booking bekræftelse'} />
      )}
    </div>
  );
}

export default KundeInfo;
