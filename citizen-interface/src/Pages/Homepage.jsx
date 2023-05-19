import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Time from '../Components/SriLankaTime';
import Qrcode from '../Components/Qrcode';
import Home from '../Components/Home';
import Fine from '../Components/Fine';
import Complain from '../Components/Complain';
import Vehicles from '../Components/Vehicles';
import Candrive from '../Components/Candrive';
import CForm from '../Components/CForm';
import Vehibutton from '../Components/Vehibutton';
import prof from '../assets/profilepic.png';
import axios from 'axios';

function Homepage() {
  const [download, setDownload] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [userData, setUserData] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [usernic, setNic] = useState("");

 


  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userData="))
      ?.split("=")[1];

    if (cookieValue) {
      const userDataObj = JSON.parse(cookieValue);
      setUserData(userDataObj.customerId); // assuming userDataObj has an 'id' property
    }
  }, []);
  console.log(userData);

 
useEffect(() => {
  if (userData) {
    axios
      .get(`http://localhost:1671/getUser/${userData}`)
      .then((response) => {
        setCartItems(response.data);
        console.log(setCartItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [userData]);
console.log(cartItems);
const dob = new Date(cartItems.dob);
const today = new Date();
const age = today.getFullYear() - dob.getFullYear();



  const person = {
    profile: prof,
    nic: cartItems.nic,
    name: cartItems.firstname + cartItems.middleName +" "+ cartItems.lastName,
    age: age,
    mobile: cartItems.mobileNo,
    Special: 'Shoud wear contact lensces',
  };
  const text = person.nic;
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    setNic(person.nic);
  }, [person.nic]);

  const handleClick = (index) => {
    setActiveButtonIndex(index);
  };
  return (
    <div className='flex  place-content-center bg-[#DEE2E3] h-screen'>
      <div className='px-2 py-2 drop-shadow-2xl rounded-3xl w-11/12 h-[46rem] mt-[2.5rem] bg-[#E8ECED]'>
        <h1 className=' absolute mt-5 ml-16 text-5xl text-[#405C5C] font-bruno'>
          Drive Safe
        </h1>
        <Navbar
          activeButtonIndex={activeButtonIndex}
          handleClick={handleClick}
        />
        <Time />
        <Qrcode text={text} />
        {activeButtonIndex === 0 && <Home person={person} />}
        {activeButtonIndex === 0 && <Candrive />}
        {activeButtonIndex === 1 && <Fine />}
        {activeButtonIndex === 2 && <Complain refresh={refresh} usernic={usernic}/>}
        {activeButtonIndex === 2 && <CForm setRefresh={setRefresh} />}
        {activeButtonIndex === 3 && (
          <Vehicles setDownload={setDownload} refresh={refresh} usernic={usernic}/>
        )}
        {activeButtonIndex === 3 && (
          <Vehibutton download={download} setRefresh={setRefresh} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
