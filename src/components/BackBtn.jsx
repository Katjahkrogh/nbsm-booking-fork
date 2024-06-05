import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

function BackBtn({ setStep }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setStep((prevStep) => prevStep - 1);
    }
  };
  return (
    <div
      role="button"
      aria-label="Gå tilbage"
      tabIndex={0}
      onClick={() => {
        setStep((prevStep) => prevStep - 1);
      }}
      onKeyDown={handleKeyDown}
      className={`text-green cursor-pointer flex gap-1 justify-start align-baseline ${montserrat.className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-arrow-left-short"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
        />
      </svg>
      <p>Gå tilbage</p>
    </div>
  );
}

export default BackBtn;
