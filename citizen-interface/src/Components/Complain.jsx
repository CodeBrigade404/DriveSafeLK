import React, { useState, useEffect } from 'react';

function Complain({ refresh, usernic }) {
  const [complain, setComplain] = useState([]);

  useEffect(() => {
    const getComplain = async () => {
      const response = await fetch(
        `http://3.26.255.165:5300/api/complaints/nic/${usernic}`
      );
      const data = await response.json();
      setComplain(data);
    };

    getComplain();
  }, [refresh]);

  return (
    <div className='pt-6 pl-[1rem] ml-[50rem] mt-[4rem] w-[30rem] h-[31rem] bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C] rounded-3xl '>
      <div className='flex flex-col overflow-scroll w-[28rem] h-[28rem]'>
        {complain.map((complaint) => (
          <div
            className='py-3 text-[#405D5C] text-lg mb-4 pl-1 w-full flex bg-slate-100 flex-row'
            key={complaint.id}
          >
            <p className='w-[6rem]'>{complaint.category}</p>
            <p className='w-[12rem] truncate'>{complaint.description}</p>
            <p className='w-[5rem] ml-10'>{complaint.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Complain;
