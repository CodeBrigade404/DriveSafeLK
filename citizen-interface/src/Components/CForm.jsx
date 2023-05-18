import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function CForm() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const complain = {
      nic: '200026401823',
      name: 'Kris Hemsworth',
      category,
      description,
      evidence: [
        'https://example.com/photo1.jpg',
        'https://example.com/photo2.jpg',
        'https://example.com/photo3.jpg',
      ],
      status: 'Processing',
    };
    await axios.post('http://3.26.255.165:5300/api/complaints', complain);
    setCategory('');
    setDescription('');
  };
  return (
    <div className='absolute flex flex-col mt-[-31rem] ml-[25rem] text-[#405D5C] w-[23rem] rounded-3xl h-[31rem] pl-3 pt-3 pr-3 bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C]'>
      <h1 className='text-2xl text-center px-1 py-1 '>Add a complain</h1>

      <label className='mt-4' for='fname'>
        Category:
      </label>
      <input
        type='text'
        id='fname'
        name='fname'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label className='mt-4' for='lname'>
        Content:
      </label>
      <textarea
        id='w3review'
        name='w3review'
        rows='5'
        cols='50'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
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
      <button
        className='rounded-full bg-[#FCFCFC] ease-in-out  duration-700 hover:bg-[#405D5C] hover:text-[#FDFDFD]   px-5 py-2  mx-4 mt-10 drop-shadow-xl hover:drop-shadow-2xl  my-2 '
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default CForm;
