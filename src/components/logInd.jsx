import React from 'react'
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';

function LogInd() {
  return (
   

    <div className="flex flex-col md:items-center">    
    <StepText header={"Log ind"} />
      <Input
        type={"text"}
        htmlFor={"navn"}
        name={"navn"}
        placeholder={"Fornavn"}
      />
      <Input
        type={"text"}
        htmlFor={"kode"}
        name={"kode"}
        placeholder={"Adgangskode"}
      />
      <PrimaryBtn text={"Log ind"} />
    </div>

  );
}

export default LogInd