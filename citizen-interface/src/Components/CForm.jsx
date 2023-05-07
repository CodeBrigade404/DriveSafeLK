import React from 'react';

function CForm() {
  return (
    <div className='absolute flex flex-col mt-[-31rem] ml-[25rem] text-[#405D5C] w-[23rem] rounded-3xl h-[31rem] pl-3 pt-3 pr-3 bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C]'>
      <h1 className='text-2xl text-center px-1 py-1 '>Add a complain</h1>

      <label className='mt-4' for='fname'>
        Category:
      </label>
      <input type='text' id='fname' name='fname' />
      <label className='mt-4' for='lname'>
        Content:
      </label>
      <textarea id='w3review' name='w3review' rows='5' cols='50'></textarea>
      <label className='mt-4' for='lname'>
        Upload Evidence:
      </label>
      <input
        type='file'
        class='block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-emerald-50 file:text-violet-700
      hover:file:bg-violet-100
    '
      />
      <button className='rounded-full bg-[#FCFCFC] ease-in-out  duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD]   px-5 py-2  mx-4 mt-10 drop-shadow-xl hover:drop-shadow-2xl  my-2 '>
        Submit
      </button>
    </div>
  );
}

export default CForm;
