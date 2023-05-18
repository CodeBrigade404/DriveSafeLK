import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Vehicles() {
  const [vehicle, setVehicle] = useState([]);
  const [numberplates, setNumberplates] = useState([]);

  const getVehicle = async () => {
    try {
      const response = await axios.get(
        'http://52.62.234.207:80/api/vehicles/search_nic/200026401824'
      );
      setVehicle(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const extractNumberplates = () => {
    const plates = vehicle.map((vehicle) => vehicle.regNo);
    setNumberplates(plates);
  };

  useEffect(() => {
    getVehicle();
  }, []);

  useEffect(() => {
    extractNumberplates();
  }, [vehicle]);

  return (
    <div className='ml-[26rem] overflow-y-auto mt-[4rem] w-[40rem] h-[31rem] bg-[#F8F9FA] drop-shadow-2xl shadow-[#405C5C] rounded-3xl'>
      <div className='auto-rows-auto mx-6 text-[#405D5C] text-lg my-4 grid grid-cols-3'>
        {numberplates.map((numberplate, index) => (
          <span
            className={`mx-1 rounded-xl my-1 flex flex-col place-content-center text-center w-[10rem] h-[5rem] drop-shadow-lg ${
              index === 4
                ? 'bg-slate-300 mx-1 rounded-xl my-1 flex flex-col place-content-center text-center w-[10rem] h-[5rem] drop-shadow-lg'
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
