import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import Input from "./Input";
import StepText from "./StepText";

function OpretBruger() {
  return (
      <div className="flex flex-col md:items-center">  
      <StepText header={"Opret en ny profil"} />
        <Input
          type={"text"}
          htmlFor={"navn"}
          name={"navn"}
          placeholder={"Fornavn"}
        />

        <Input
          type={"email"}
          htmlFor={"email"}
          name={"email"}
          placeholder={"Email"}
        />
        <Input
          type={"date"}
          htmlFor={"føs"}
          name={"føs"}
          placeholder={"Fødselsdag"}
        />
        <Input
          type={"text"}
          htmlFor={"kode"}
          name={"kode"}
          placeholder={"Adgangskode"}
        />
        <PrimaryBtn text={"Opret bruger"} />
      </div>
  );
}

export default OpretBruger;
