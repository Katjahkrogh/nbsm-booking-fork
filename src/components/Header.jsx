import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 w-full">
      <Image src={'logo.svg'} width={130} height={130} alt="" />
    </nav>
  );
}

export default Header;
