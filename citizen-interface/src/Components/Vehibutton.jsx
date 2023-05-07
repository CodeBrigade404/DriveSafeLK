import React from 'react';

function Vehibutton() {
  return (
    <div className='absolute ml-[67rem] flex flex-col  w-[14rem] h-[31rem] mt-[-31rem] '>
      <button className='w-[12rem] mt-10 rounded-full h-[4rem] place-self-center border-2 bg-slate-200 hover:bg-[#405C5C] hover:text-white border-[#405C5C] text-[#405C5C] text-2xl font-bruno drop-shadow-xl'>
        Download
      </button>
      <button className='w-[12rem] mt-10 rounded-full h-[4rem] place-self-center border-2 bg-slate-200 hover:bg-[#8B0000] border-[#8B0000] text-[#8B0000] hover:text-white text-2xl font-bruno drop-shadow-xl'>
        Missing!
      </button>
    </div>
  );
}

export default Vehibutton;
