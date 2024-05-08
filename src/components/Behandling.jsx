import React from "react";
import StepText from "./StepText";
import Radio from "./Radio";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});


function Behandling() {
  return (
    <div className=" flex flex-col md:items-center">
      <StepText
        header={"Vælg behandling"}
        smallText={"Design m.m aftales på dagen"}
      />
      <ol
        className={`space-y-4 text-sm font leading-6 text-lgreen ${openSans.className}`}
      >
        <Radio behandling={"Nyt sæt Forlængelse gele / akrylgele"} id={1} />
        <Radio behandling={"Opfyldning gele / akrylgele"} id={2} />
        <Radio behandling={"Nyt sæt gelpolish"} id={3} />
        <Radio behandling={"Opfyldning gelpolish"} id={4} />
        <Radio behandling={"Aftagning"} id={5} />
      </ol>
    </div>
  );
}

export default Behandling;
