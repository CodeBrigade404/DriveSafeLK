import React from 'react';
import scooter from '../assets/scooter.svg';
import bike from '../assets/bike.svg';
import car from '../assets/car.svg';
import bus from '../assets/bus.svg';
import cross from '../assets/cross.svg';
import tick from '../assets/tick.svg';

function Candrive() {
  return (
    <div className='absolute ml-[30rem] drop-shadow-2xl mt-[-31rem] h-[31rem] rounded-3xl bg-[#f8f9fa] w-[15rem]'>
      <div className=' overflow-y-auto flex flex-col ml-[2rem] mt-[1rem] place-content-center w-[13rem] h-[28rem]'>
        <div className='flex flex-row '>
          <img className='w-[7rem] ' src={scooter} alt='' />
          <img className='w-[2rem] ml-[1.5rem] mt-[2rem]' src={tick} alt='' />
        </div>
        <div className='flex flex-row '>
          <img className='w-[7rem]' src={bike} alt='' />
          <img className='w-[2rem] ml-[1.5rem] ' src={tick} alt='' />
        </div>
        <div className='flex flex-row '>
          <img className='w-[7rem]' src={car} alt='' />
          <img className='w-[2rem] ml-[1.5rem]' src={tick} alt='' />
        </div>
        <div className='flex flex-row '>
          <img className='w-[7rem]' src={bus} alt='' />
          <img className='w-[2rem] ml-[1.5rem] ' src={cross} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Candrive;
