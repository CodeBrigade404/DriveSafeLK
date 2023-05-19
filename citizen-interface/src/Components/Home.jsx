import React from 'react';
import { Link } from 'react-router-dom';

function Home({ person }) {
  const handleLogout = () => {
    if (document.cookie) {
      document.cookie =
        'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    window.location.href = '/login';
  };

  return (
    <div className='ml-[50rem] mt-[4rem] flex flex-col w-[30rem] h-[31rem] bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C] rounded-3xl'>
      <img
        className='rounded-full ml-[10rem] mt-[-3rem] overflow-hidden object-contain w-[10rem] h-[10rem]'
        src={person.profile}
        alt='profilePic'
      />
      <div className=' text-xl  ml-[2rem] mt-[2rem] flex flex-row text-[#405C5C]'>
        <span className='w-[6rem] text-left'>Name </span>{' '}
        <span className='w-[30rem]'>{person.name}</span>
      </div>
      <div className=' text-xl ml-[2rem] mt-[1rem] flex flex-row text-[#405C5C]'>
        <span className='w-[6rem] text-left'>Age </span>{' '}
        <span className='w-[30rem]'>{person.age}</span>
      </div>
      <div className=' text-xl ml-[2rem] mt-[1rem] flex flex-row text-[#405C5C]'>
        <span className='w-[6rem] text-left'>NIC </span>{' '}
        <span className='w-[30rem]'>{person.nic}</span>
      </div>
      <div className=' text-xl ml-[2rem] mt-[1rem] flex flex-row text-[#405C5C]'>
        <span className='w-[6rem] text-left'>Mobile </span>{' '}
        <span className='w-[30rem]'>{person.mobile}</span>
      </div>

      <div className=' text-xl ml-[2rem] mt-[1rem] flex flex-row text-[#405C5C]'>
        <span className='w-[6rem] text-left'>Other </span>{' '}
        <span className='w-[30rem]'>{person.Special}</span>
      </div>
      <div className='  ml-[2rem] mt-[1rem] text-sm font-montserrat flex flex-row text-[#405C5C]'>
        <Link to='/forgetPassword'>
          <button className='rounded-full ease-in-out  hover:bg-[#405D5C] hover:text-[#FDFDFD]  bg-[#fdfdfd] px-5 py-2  mx-4 shadow-2xl  my-2 '>
            Change Password
          </button>
        </Link>
        <button
          className='rounded-full ease-in-out  hover:bg-[#ff6363] hover:text-[#FDFDFD]  bg-[#fdfdfd] px-5 py-2  mx-4 shadow-2xl  my-2 '
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
