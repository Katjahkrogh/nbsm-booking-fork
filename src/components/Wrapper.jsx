import React from 'react'
import Startpage from './Startpage'
import LogInd from './logInd'
import OpretBruger from './OpretBruger'

function Wrapper() {
  return (
    <div className='px-10'>
      <Startpage />
      <LogInd />
      <OpretBruger />
    </div>
  )
}

export default Wrapper