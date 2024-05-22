import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';

function OpretBruger({ setStep, onNameChange, onEmailChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'navn') {
      onNameChange(value);
    } else if (name === 'email') {
      onEmailChange(value);
    }
  };

  return (
    <div className="flex flex-col md:items-center">
      <StepText header={"Indtast dine oplysning"} />
      <Input
        type={"text"}
        htmlFor={"navn"}
        name={"navn"}
        placeholder={"Fornavn"}
        onChange={handleChange}
      />
      <Input
        type={"email"}
        htmlFor={"email"}
        name={"email"}
        placeholder={"Email"}
        onChange={handleChange}
      />
      <Input
        type={"date"}
        htmlFor={"føs"}
        name={"føs"}
        placeholder={"Fødselsdag"}
      />
      <Input
        type={"text"}
        htmlFor={"telefon"}
        name={"telefon"}
        placeholder={"Telefon nummer"}
      />
      <PrimaryBtn setStep={setStep} text={"Gå til booking bekræftelse"} />
    </div>
  );
}

export default OpretBruger;
