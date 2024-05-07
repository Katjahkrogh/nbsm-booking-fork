'use client';
import React from 'react';
import Startpage from './Startpage';
import LogInd from './logInd';
import OpretBruger from './OpretBruger';
import Calender from './Calender';

function Wrapper() {
  return (
    <div className="px-10">
      <Startpage />
      <LogInd />
      <OpretBruger />
      <Calender />
    </div>
  );
}

export default Wrapper;
