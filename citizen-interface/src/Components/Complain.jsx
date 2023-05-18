import React, { useState } from 'react';
import { useEffect } from 'react';

function Complain() {
  const [complain, setComplain] = useState([]);
  const getComplain = async () => {
    const response = await fetch(
      'http://3.26.255.165:5300/api/complaints/nic/200026401823'
    );
    const data = await response.json();
    setComplain(data);
  };
  useEffect(() => {
    getComplain();
  }, []);

  return (
    <div className='pt-6 pl-[1rem] ml-[50rem] mt-[4rem] w-[30rem] h-[31rem] bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C] rounded-3xl '>
      <div className=' flex flex-col overflow-scroll  w-[28rem] h-[28rem] '>
        {complain.map((complain) => (
          <div className='py-3 text-[#405D5C] text-lg mb-4 pl-1  w-full flex bg-slate-100  flex-row '>
            <p className='w-[6rem]'>{complain.category}</p>
            <p className='w-[12rem] truncate'>{complain.description}</p>
            <p className='w-[5rem] ml-10'>{complain.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Complain;
