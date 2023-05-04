import React from 'react';
import Navbar from '../Components/Navbar';

function Homepage() {
  return (
    <div className='flex  place-content-center bg-[#DEE2E3] h-screen'>
      <div className='px-2 py-2 drop-shadow-2xl rounded-3xl w-11/12 h-[46rem] mt-[2.5rem] bg-[#E8ECED]'>
        <Navbar />
      </div>
    </div>
  );
}

export default Homepage;
