import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

const CitizenAdd = () => {
  const [data, setData] = useState({
    firstname: "",
    middleName: "",
    lastName: "",
    gender: "",
    nic: "",
    address: "",
    mobileNo: "",
    email: "",
    password: "",
    ownvehicle: {
      registrationNo: "",
    },
    mariageStatus: "",
    dob: "",
    driveType: [
      { name: " Motorcycles ", isChecked: false },
      { name: " Dual purpose Motor vehicle", isChecked: false },
      { name: " Motor Lorry", isChecked: false },
      { name: " Heavy Motor Lorry", isChecked: false },
      { name: " Land Vehicle", isChecked: false },
      { name: " Special purpose Vehicle", isChecked: false },
    ],
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "registrationNo") {
      setData({
        ...data,
        ownvehicle: {
          ...data.ownvehicle,
          [name]: value,
        },
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:1671/register";
      const payload = {
        ...data,
        ownvehicle: {
          registrationNo: data.ownvehicle.registrationNo || "",
        },
        driveType: data.driveType.filter((item) => item.isChecked),
        // Filter out the unchecked items and only include the names
      };
      const { data: res } = await axios.post(url, payload);
      navigate("/login");
      console.log(res.message);
      console.log(payload);
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  const handleDriveTypeChange = (e) => {
    const { name, checked } = e.target;
    setData((prevState) => ({
      ...prevState,
      driveType: prevState.driveType.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      ),
    }));
    console.log(data.driveType);
  };

  return (
    <div>
      <Box
        sx={{
          pt: 6,
          pb: 6,
        }}>
        <Container>
          <Divider>
            <Chip
              label='Citizen Registration'
              component='h1'
              sx={{
                color: "white",
                backgroundColor: "#263238",
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "Roboto",
              }}></Chip>
          </Divider>
        </Container>
        <div className={styles.signup_container}>
          <div className={styles.signup_form_container}>
            <div className={styles.left}>
              <h1>Add Citizen Form</h1>
              <Link to='/login'>
                <button type='button' className={styles.white_btn}>
                  View All Citizen
                </button>
              </Link>
            </div>
            <div className={styles.right}>
              <form className={styles.form_container} onSubmit={handleSubmit}>
                <hr></hr>
                <input
                  type='text'
                  placeholder='First Name'
                  name='firstname'
                  onChange={handleChange}
                  value={data.firstname}
                  required
                  className={styles.input}
                />
                <input
                  type='text'
                  placeholder='Middle Name'
                  name='middleName'
                  onChange={handleChange}
                  value={data.middleName}
                  required
                  className={styles.input}
                />

                <input
                  type='text'
                  placeholder='Last Name'
                  name='lastName'
                  onChange={handleChange}
                  value={data.lastName}
                  required
                  className={styles.input}
                />
                <input
                  type='text'
                  placeholder='NIC'
                  name='nic'
                  onChange={handleChange}
                  value={data.nic}
                  required
                  className={styles.input}
                />

                <select
                  name='gender'
                  onChange={handleChange}
                  value={data.gender}
                  className={styles.input}>
                  <option value=''>Select gender</option>
                  <option value='Male'>Male</option>
                  <option value='Female'>Female</option>
                  <option value='Other'>Other</option>
                </select>

                <input
                  type='text'
                  placeholder='Address'
                  name='address'
                  onChange={handleChange}
                  value={data.address}
                  required
                  className={styles.input}
                />
                <input
                  type='number'
                  placeholder='Mobile No'
                  name='mobileNo'
                  onChange={handleChange}
                  value={data.mobileNo}
                  required
                  className={styles.input}
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  value={data.email}
                  required
                  className={styles.input}
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={handleChange}
                  value={data.password}
                  required
                  className={styles.input}
                />
                <input
                  type='text'
                  placeholder='Vehicle Registration No'
                  name='registrationNo'
                  onChange={handleChange}
                  value={data.ownvehicle.registrationNo}
                  equired
                  className={styles.input}
                />

                <select
                  name='mariageStatus'
                  onChange={handleChange}
                  value={data.mariageStatus}
                  className={styles.input}>
                  <option value=''>Select Marriage Status</option>
                  <option value='Single'>Single</option>
                  <option value='Married'>Married</option>
                  <option value='Divorced'>Divorced</option>
                  <option value='Widowed'>Widowed</option>
                </select>
                <div className={styles.input}>
                  <p>Select License Category</p>
                  <div className='checkbox-group'>
                    {data.driveType.map((driveType) => (
                      <label key={driveType.name}>
                        <input
                          type='checkbox'
                          name={driveType.name}
                          checked={driveType.isChecked}
                          onChange={handleDriveTypeChange}
                        />
                        {driveType.name}
                      </label>
                    ))}
                  </div>
                </div>

                <DatePicker
                  placeholderText='Date of Birth'
                  name='dob'
                  selected={data.dob}
                  onChange={(date) => setData({ ...data, dob: date })}
                  dateFormat='dd/MM/yyyy'
                  className={styles.input}
                />

                {error && <div className={styles.error_msg}>{error}</div>}
                <button type='submit' className={styles.green_btn}>
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default CitizenAdd;
