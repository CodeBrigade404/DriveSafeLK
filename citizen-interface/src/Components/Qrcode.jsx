import React from 'react';
import QRCodeReact from 'qrcode.react';

function Qrcode({ text }) {
  return (
    <div className='absolute  flex py-10 place-content-center drop-shadow-2xl shadow-[#405C5C] rounded-3xl mt-[22rem] ml-[4rem] w-[19rem] bg-[#F8F9FA]'>
      <QRCodeReact
        value={text}
        className=''
        fgColor='#405C5C'
        bgColor='transparent'
      />
    </div>
  );
}

export default Qrcode;
