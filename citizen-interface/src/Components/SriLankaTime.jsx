import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;

  return (
    <div className=' absolute mt-[4rem] ml-[4rem] drop-shadow-2xl shadow-[#405C5C] flex py-10 flex-col bg-[#F8F9FA] rounded-3xl  w-[19rem] '>
      <div className='text-5xl  text-[#405C5C] flex flex-col   place-items-center '>
        {ampm}
      </div>
      <div className='text-8xl flex flex-col place-items-center text-[#405C5C] '>
        <div className=''>
          <span>{formattedHours}</span>
          <span>:</span>
          <span>{minutes.toString().padStart(2, '0')}</span>
        </div>
        <span className='absolute ml-[16rem] mt-16 text-xl  w-5 '>
          {seconds.toString().padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}

export default Clock;
