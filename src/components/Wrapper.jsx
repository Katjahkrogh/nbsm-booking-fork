'use client';
import React from 'react';
import Startpage from './Startpage';
import LogInd from './logInd';
import OpretBruger from './OpretBruger';
import Calender from './Calender';
import Behandling from './Behandling';

function Wrapper() {
  return (
    <div className="px-10">
      <Startpage />
      <LogInd />
      <OpretBruger />
      <Behandling />
      <Calender />
    </div>
  );
}

export default Wrapper;
