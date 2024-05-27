"use client"
import React, {useState, useEffect} from 'react';
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';


function OpretBruger({ setStep, onNameChange, onEmailChange }) {
 const [navn, setNavn] = useState("");
 const [email, setEmail] = useState("");
 const [fødselsdag, setFødselsdag] = useState("");
 const [telefon, setTelefon] = useState("");
 const [isNameValid, setIsNameValid] = useState(false);
 const [isEmailValid, setIsEmailValid] = useState(false);
 const [isBirthDateValid, setIsBirthDateValid] = useState(false);
 const [isTelefonValid, setIsTelefonValid] = useState(false);
 const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let isValid = true;

    if (name === "navn") {
      onNameChange(value);
      setNavn(value);
      isValid = value.trim().length > 0;
      setIsNameValid(isValid);
    } else if (name === "email") {
      onEmailChange(value);
      setEmail(value);
      isValid = /\S+@\S+\.\S+/.test(value); // email validering
      setIsEmailValid(isValid);
    } else if (name === "føs") {
      // Validering af fødselsdag
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      isValid = age >= 13; // tjekker om personen er over 13 år gammel
      setFødselsdag(value);
      setIsBirthDateValid(isValid);
    } else if (name === "telefon") {
      setTelefon(value);
      isValid = /^\d{8,10}$/.test(value); // tlf validering
      setIsTelefonValid(isValid);
    }

    setIsFormValid(
      isNameValid && isEmailValid && isBirthDateValid && isTelefonValid
    );
  };

  // useEffect(() => {
  //   setIsFormValid(
  //     isNameValid && isEmailValid && isBirthDateValid && isTelefonValid
  //   );
  // }, [isNameValid, isEmailValid, isBirthDateValid, isTelefonValid]);

  return (
    <div className="flex flex-col md:items-center">
      <StepText header={"Indtast dine oplysning"} />
      <Input
        type={"text"}
        htmlFor={"navn"}
        name={"navn"}
        placeholder={"Fornavn"}
        minLength={"2"}
        onChange={handleChange}
        className={
          "valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        }
      />
      <Input
        type={"email"}
        htmlFor={"email"}
        name={"email"}
        placeholder={"Email"}
        onChange={handleChange}
        className={
          "valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        }
      />
      <Input
        type={"date"}
        htmlFor={"føs"}
        name={"føs"}
        placeholder={"Fødselsdag"}
        onChange={handleChange}
        className={
          "valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        }
      />

      <Input
        type={"text"}
        htmlFor={"telefon"}
        name={"telefon"}
        placeholder={"Telefon"}
        onChange={handleChange}
        className={
          "valid:[&:not(:placeholder-shown):not(:focus)]:bg-green-50 valid:[&:not(:placeholder-shown):not(:focus)]:border-green-500 valid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-green-500 invalid:[&:not(:placeholder-shown):not(:focus)]:focus:ring-red-500 invalid:[&:not(:placeholder-shown):not(:focus)]:bg-red-50 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
        }
      />
      {isFormValid && (
        <PrimaryBtn setStep={setStep} text={"Gå til booking bekræftelse"} />
      )}
    </div>
  );
}

export default OpretBruger;
