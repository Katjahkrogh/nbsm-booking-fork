import React from 'react'
import PrimaryBtn from './PrimaryBtn';
import Input from './Input';
import StepText from './StepText';

function LogInd() {
  return (
    <div className="flex flex-col items-center">
      <StepText
        header={"Log ind på din boookingprofil"}
      />
      <Input type={"text"} htmlFor={"navn"} name={"navn"} placeholder={"Fornavn"}/>
      <PrimaryBtn text={"Log ind"} />
    </div>
  );
}

export default LogInd