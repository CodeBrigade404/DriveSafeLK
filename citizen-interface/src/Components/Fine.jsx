import React from 'react';

function Fine() {
  const obj = {
    citizenFines: {
      _id: '64562187026b4904ff397630',
      citizenNIC: '2000026401824',
      citizenName: 'C V Rathanasuriya',
      finesOfCitizens: [
        {
          statusOfPaid: false,
          fineId: 'defd456',
          fineAmount: 4350,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Minuwangoda',
          fineEvidence: '(fineEvidence.jpg) officer GPc',
          _id: '6456231a870f61a592e9cbb5',
        },
        {
          statusOfPaid: false,
          fineId: 'RPcd456',
          fineAmount: 4550,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Malabe',
          fineEvidence: '(fineEvidence.jpg) officer GPc ',
          _id: '6456231a870f61a592e9cbb6',
        },
        {
          statusOfPaid: false,
          fineId: 'defd456',
          fineAmount: 4350,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Minuwangoda',
          fineEvidence: '(fineEvidence.jpg) officer GPc',
          _id: '6456231a870f61a592e9cbb5',
        },
        {
          statusOfPaid: false,
          fineId: 'RPcd456',
          fineAmount: 4550,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Malabe',
          fineEvidence: '(fineEvidence.jpg) officer GPc ',
          _id: '6456231a870f61a592e9cbb6',
        },
        {
          statusOfPaid: false,
          fineId: 'defd456',
          fineAmount: 4350,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Minuwangoda',
          fineEvidence: '(fineEvidence.jpg) officer GPc',
          _id: '6456231a870f61a592e9cbb5',
        },
        {
          statusOfPaid: false,
          fineId: 'RPcd456',
          fineAmount: 4550,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Malabe',
          fineEvidence: '(fineEvidence.jpg) officer GPc ',
          _id: '6456231a870f61a592e9cbb6',
        },
        {
          statusOfPaid: false,
          fineId: 'defd456',
          fineAmount: 4350,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Minuwangoda',
          fineEvidence: '(fineEvidence.jpg) officer GPc',
          _id: '6456231a870f61a592e9cbb5',
        },
        {
          statusOfPaid: false,
          fineId: 'RPcd456',
          fineAmount: 4550,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Malabe',
          fineEvidence: '(fineEvidence.jpg) officer GPc ',
          _id: '6456231a870f61a592e9cbb6',
        },
        {
          statusOfPaid: false,
          fineId: 'defd456',
          fineAmount: 4350,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Minuwangoda',
          fineEvidence: '(fineEvidence.jpg) officer GPc',
          _id: '6456231a870f61a592e9cbb5',
        },
        {
          statusOfPaid: false,
          fineId: 'RPcd456',
          fineAmount: 4550,
          fineDate: '2023-05-01T00:00:00.000Z',
          fineContent: 'parking violance in Malabe',
          fineEvidence: '(fineEvidence.jpg) officer GPc ',
          _id: '6456231a870f61a592e9cbb6',
        },
      ],
      __v: 0,
    },
  };

  const fines = obj.citizenFines.finesOfCitizens;
  return (
    <div className='ml-[30rem] px-5 py-5  mt-[4rem] w-[50rem] h-[31rem] bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C] rounded-3xl'>
      <div className=' flex overflow-y-auto  flex-col px-3 py3 h-[29rem] text-xl'>
        {fines.map((fine) => (
          <div className='flex rounded-2xl text-[#405D5C] drop-shadow-lg flex-row bg-slate-100 mt-4 px-4 py-1 '>
            <p className='w-[20rem] py-2 truncate'>{fine.fineContent}</p>
            <p className='ml-[3rem] py-2'>Rs.{fine.fineAmount}.00</p>
            <button className='rounded-full ml-[7rem] text-[#838889] bg-[#405D5C] text-x h-10 px-5 mx-1 drop-shadow-xl hover:drop-shadow-2xl   '>
              PAY
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fine;
