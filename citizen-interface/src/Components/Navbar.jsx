import React from 'react';

function Navbar() {
  const activeButtonIndex = 0;
  return (
    <div className='text-[#838889] text-sm font-[montserrat] mt-4  flex flex-col sm:flex-row justify-end w-full '>
      <button className={ activeButtonIndex==0 ?  'rounded-full ease-in-out  bg-[#FCFCFC]  duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD] active:bg-[#405D5C] active:text-[#FDFDFD]  px-5 py-2  mx-4 drop-shadow-xl  my-2'}>
        HOME
      </button>
      <button className='rounded-full ease-in-out bg-[#FCFCFC] duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD] active:bg-[#405D5C] active:text-[#FDFDFD]  px-5 py-2  mx-4 drop-shadow-xl  my-2 '>
        FINES
      </button>
      <button className='rounded-full ease-in-out bg-[#FCFCFC] duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD] active:bg-[#405D5C] active:text-[#FDFDFD]  px-5 py-2  mx-4 drop-shadow-xl  my-2 '>
        COMPLAIN
      </button>
      <button className='rounded-full ease-in-out bg-[#FCFCFC] duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD] active:bg-[#405D5C] active:text-[#FDFDFD]  px-5 py-2  mx-4 drop-shadow-xl  my-2 '>
        VEHICLES
      </button>
    </div>
  );
}

export default Navbar;
