import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="flex justify-between items-center w-full mb-0 h-56 bg-green px-7">
      <Image src={'logo-light.svg'} width={130} height={130} alt="" />
    </footer>
  );
}

export default Footer;
