import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Time from '../Components/SriLankaTime';
import Qrcode from '../Components/Qrcode';
import Home from '../Components/Home';
import Fine from '../Components/Fine';
import Complain from '../Components/Complain';
import Vehicles from '../Components/Vehicles';

function Homepage() {
  const text = '200026401823';
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };
  return (
    <div className='flex  place-content-center bg-[#DEE2E3] h-screen'>
      <div className='px-2 py-2 drop-shadow-2xl rounded-3xl w-11/12 h-[46rem] mt-[2.5rem] bg-[#E8ECED]'>
        <h1 className=' absolute mt-5 ml-16 text-5xl text-[#405C5C] font-bruno'>
          Drive Safe
        </h1>
        <Navbar
          activeButtonIndex={activeButtonIndex}
          handleClick={handleClick}
        />
        <Time />
        <Qrcode text={text} />
        {activeButtonIndex === 0 && <Home />}
        {activeButtonIndex === 1 && <Fine />}
        {activeButtonIndex === 2 && <Complain />}
        {activeButtonIndex === 3 && <Vehicles />}
      </div>
    </div>
  );
}

export default Homepage;
