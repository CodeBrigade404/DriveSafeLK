import React from 'react';

function Vehicles() {
  const numberplates = [
    'BDA-3245',
    'ABC-1234',
    'XYZ-9876',
    'DEF-5678',
    'GHI-4321',
    'JKL-8765',
    'MNO-2468',
    'PQR-1357',
    'STU-9753',
    'VWX-8642',
    'YZA-3195',
    'BCD-7586',
    'EFG-4962',
    'HIJ-6239',
    'KLM-5741',
    'NOP-9283',
  ];
  return (
    <div className='ml-[26rem]  overflow-y-auto mt-[4rem]  w-[40rem] h-[31rem] bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C] rounded-3xl'>
      <div className='auto-rows-auto mx-6 text-[#405D5C] text-lg my-4 grid grid-cols-3'>
        {numberplates.map((numberplate, index) => (
          <span
            className={`mx-1 rounded-xl my-1 flex flex-col place-content-center text-center  w-[10rem] h-[5rem] drop-shadow-lg ${
              index === 4
                ? 'bg-slate-300 mx-1 rounded-xl my-1 flex flex-col place-content-center text-center  w-[10rem] h-[5rem] drop-shadow-lg'
                : 'bg-slate-100'
            }`}
            key={numberplate}
          >
            {numberplate}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
