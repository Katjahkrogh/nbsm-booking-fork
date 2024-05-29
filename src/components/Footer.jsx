import React from 'react';
import Image from 'next/image';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

function Footer() {
  return (
    <footer className="flex justify-between items-center w-full mb-0 mt-10 h-40 bg-green px-7">
      <div>
        <Image src={"logo-light.svg"} width={130} height={130} alt="" />
        <h2
          className={`text-sm mt-2 text-bg  ${montserrat.className}`}
        >
          BOOKING
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
