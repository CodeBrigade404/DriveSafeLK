import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    policeId: "",
    nic: "",
    firstname: "",
    middlename: "",
    lastname: "",
    rank: "",
    email: "",
    password: "",
    phoneNo: "",
    station: "",
    address: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://13.239.53.12:1670/register",
        formData
        
      );
      console.log(response.data);
      window.location = "/login"
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="login_container">
      <form className="login_form_container" onSubmit={handleSubmit}>
        <div className="left">
          <div className="form_container">
            <h1>Registration Form</h1>
            
            <input
              type="text"
              id="policeId"
              name="policeId"
              className="input"
              placeholder="Enter Police ID"
              value={formData.policeId}
              onChange={handleChange}
            />

            
            <input
              type="text"
              id="nic"
              name="nic"
              className="input"
              placeholder="Enter NIC"
              value={formData.nic}
              onChange={handleChange}
            />

            
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="input"
              placeholder="Enter First Name"
              value={formData.firstname}
              onChange={handleChange}
            />

           
            <input
              type="text"
              id="middlename"
              name="middlename"
              className="input"
              placeholder="Enter Middle Name"
              value={formData.middlename}
              onChange={handleChange}
            />

            
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="input"
              placeholder="Enter Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />

            
            <select
              id="rank"
              name="rank"
              className="input"
              value={formData.rank}
              onChange={handleChange}
            >
              <option value="">Select Rank</option>
              <option value="Police Constable Class 4">
                Police Constable Class 4
              </option>
              <option value="Police Constable Class 3">
                Police Constable Class 3
              </option>
              <option value="Police Constable Class 2">
                Police Constable Class 2
              </option>
              <option value="Police Constable Class 1">
                Police Constable Class 1
              </option>
              <option value="Police Sergeant Class 2">
                Police Sergeant Class 2
              </option>
              <option value="Police Sergeant Class 1">
                Police Sergeant Class 1
              </option>
              <option value="Sergeant Major">Sergeant Major</option>
              <option value="Sub Inspector Of Police">
                Sub Inspector Of Police
              </option>
              <option value="Inspector Of Police">Inspector Of Police</option>
              <option value="Chief Inspector Of Police">
                Chief Inspector Of Police
              </option>
              <option value="Assistant Superintendent Of Police">
                Assistant Superintendent Of Police
              </option>
              <option value="Superintendent Of Police">
                Superintendent Of Police
              </option>
              <option value="Senior Superintendent Of Police">
                Senior Superintendent Of Police
              </option>
              <option value="Deputy Inspector General Of Police">
                Deputy Inspector General Of Police
              </option>
              <option value="Senior Deputy Inspector General Of Police">
                Senior Deputy Inspector General Of Police
              </option>
              <option value="Inspector General Of Police">
                Inspector General Of Police
              </option>
            </select>

            
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            
            <input
              type="password"
              id="password"
              name="password"
              className="input"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />

           
            <input
              type="text"
              id="phoneNo"
              name="phoneNo"
              className="input"
              placeholder="Enter Phone Number"
              value={formData.phoneNo}
              onChange={handleChange}
            />

           
            <select
              id="station"
              name="station"
              className="input"
              value={formData.station}
              onChange={handleChange}
            >
              <option value="">Select Station</option>
              <option value="Colombo">Colombo</option>
              <option value="Galle">Galle</option>
              <option value="Matara">Matara</option>
              <option value="Kandy">Kandy</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Kurunegala">Kurunegala</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Badulla">Badulla</option>
              <option value="Ratnapura">Ratnapura</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Kalutara">Kalutara</option>
              <option value="Kegalle">Kegalle</option>
              <option value="Matale">Matale</option>
              <option value="Monaragala">Monaragala</option>
              <option value="Nuwara Eliya">Nuwara Eliya</option>
              <option value="Polonnaruwa">Polonnaruwa</option>
              <option value="Puttalam">Puttalam</option>
              <option value="Trincomalee">Trincomalee</option>
              <option value="Vavuniya">Vavuniya</option>
              <option value="Ampara">Ampara</option>
              <option value="Batticaloa">Batticaloa</option>
              <option value="Hambantota">Hambantota</option>
              <option value="Mannar">Mannar</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Nuwara Eliya">Nuwara Eliya</option>
            </select>

            
            <input
              type="text"
              id="address"
              name="address"
              className="input"
              placeholder="Enter Address"
              value={formData.address}
              onChange={handleChange}
            />
 {error && <div className="error_msg">{error}</div>}

            <button type="submit" className="green_btn">
              Register
            </button>
         
          </div>
        </div>
        <div className="right">
          <h1>Current User?</h1>
          <Link to="/login">
            <button type="button" className="white_btn">
              Sign In
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
