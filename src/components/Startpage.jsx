import React from 'react'
import PrimaryBtn from './PrimaryBtn';
import SecondaryBtn from './SecondaryBtn';
import StepText from './StepText';

function Startpage() {
  return (
    <div className="flex flex-col items-center">
      <StepText
        header={"Nails By Sascha Melina - Booking"}
        smallText={"Log ind eller opret en ny bruger for at booke en tid "}
      />
      <PrimaryBtn text={"Log ind"} />
      <p className="text-lightGreen">ELLER</p>
      <SecondaryBtn text={"opret ny bruger"} />
    </div>
  );
}

export default Startpage