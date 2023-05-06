import React from 'react';

function Navbar({ activeButtonIndex, handleClick }) {
  return (
    <div className='text-[#838889] text-sm font-montserrat mt-4  flex flex-col sm:flex-row justify-end w-full '>
      <button
        className={`rounded-full ease-in-out ${
          activeButtonIndex === 0 ? 'bg-[#405D5C]' : 'bg-[#FCFCFC]'
        }  duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD]   px-5 py-2  mx-4 drop-shadow-xl hover:drop-shadow-2xl  my-2`}
        onClick={() => handleClick(0)}
      >
        HOME
      </button>
      <button
        className={`rounded-full ease-in-out ${
          activeButtonIndex === 1 ? 'bg-[#405D5C]' : 'bg-[#FCFCFC]'
        } duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD]   px-5 py-2  mx-4 drop-shadow-xl hover:drop-shadow-2xl  my-2 `}
        onClick={() => handleClick(1)}
      >
        FINES
      </button>
      <button
        className={`rounded-full ease-in-out ${
          activeButtonIndex === 2 ? 'bg-[#405D5C]' : 'bg-[#FCFCFC]'
        } duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD]   px-5 py-2  mx-4 drop-shadow-xl hover:drop-shadow-2xl  my-2 `}
        onClick={() => handleClick(2)}
      >
        COMPLAIN
      </button>
      <button
        className={`rounded-full ease-in-out ${
          activeButtonIndex === 3 ? 'bg-[#405D5C]' : 'bg-[#FCFCFC]'
        } duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD]   px-5 py-2  mx-4 drop-shadow-xl hover:drop-shadow-2xl  my-2 `}
        onClick={() => handleClick(3)}
      >
        VEHICLES
      </button>
    </div>
  );
}

export default Navbar;
