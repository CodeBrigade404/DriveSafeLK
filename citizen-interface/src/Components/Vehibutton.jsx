import React from 'react';
import { useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';
import axios from 'axios';

function Vehibutton({ download, setRefresh }) {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    setVehicle({
      id: download._id,
      regNo: download.regNo,
      chassiNo: download.chassiNo,
      vehicleType: download.vehicleType,
      color: download.color,
      vehicleModel: download.vehicleModel,
      yearOfManufacture: download.yearOfManufacture,
      vehicleOwners: download.vehicleOwners,
      status: download.status,
    });
  }, [download]);

  const handleDownload = () => {
    const content = generatePDFContent();
    const options = { filename: 'vehicle_details.pdf' };

    html2pdf().set(options).from(content).save();
  };

  const handleMissing = async () => {
    await axios.patch(`http://3.26.196.154:5200/api/vehicles/${vehicle.id}`, {
      status: 'stolen',
    });
    setRefresh((current) => !current);
  };

  const generatePDFContent = () => {
    return `
      <html>
        <head>
          <style>
            /* Add any custom styling here for the PDF */
          </style>
        </head>
        <body>
          <h1>Vehicle Details</h1>
          <p><strong>Registration Number:</strong> ${vehicle.regNo}</p>
          <p><strong>Chassis Number:</strong> ${vehicle.chassiNo}</p>
          <p><strong>Vehicle Type:</strong> ${vehicle.vehicleType}</p>
          <p><strong>Color:</strong> ${vehicle.color}</p>
          <p><strong>Vehicle Model:</strong> ${vehicle.vehicleModel}</p>
          <p><strong>Year of Manufacture:</strong> ${vehicle.yearOfManufacture}</p>
          <p><strong>Vehicle Owners:</strong> ${vehicle.vehicleOwners}</p>
          <p><strong>Status:</strong> ${vehicle.status}</p>
        </body>
      </html>
    `;
  };

  return (
    <div className='absolute ml-[67rem] flex flex-col  w-[14rem] h-[31rem] mt-[-31rem] '>
      <button
        className='w-[12rem] mt-10 rounded-full h-[4rem] place-self-center border-2 bg-slate-200 hover:bg-[#405C5C] hover:text-white border-[#405C5C] text-[#405C5C] text-2xl font-bruno drop-shadow-xl'
        onClick={handleDownload}
      >
        Download
      </button>
      <button
        className='w-[12rem] mt-10 rounded-full h-[4rem] place-self-center border-2 bg-slate-200 hover:bg-[#8B0000] border-[#8B0000] text-[#8B0000] hover:text-white text-2xl font-bruno drop-shadow-xl'
        onClick={handleMissing}
      >
        Missing!
      </button>
    </div>
  );
}

export default Vehibutton;
