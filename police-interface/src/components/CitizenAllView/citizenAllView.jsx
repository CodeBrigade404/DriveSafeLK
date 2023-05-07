import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@material-ui/core";
import styles from "./styles.module.css";
import { Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';



const CitizenAll = () => {
  const [users, setUsers] = useState([]);
  const [searchNIC, setSearchNIC] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:1671/getAllUser");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredUsers = users
  .filter(
    (user) =>
      (searchNIC === "" || user.nic === searchNIC) &&
      (user.firstname.toLowerCase().includes(searchNIC.toLowerCase()) ||
        user.nic.toLowerCase().includes(searchNIC.toLowerCase()))
  )
  .sort((a, b) => {
    const dobA = new Date(a.dob);
    const dobB = new Date(b.dob);

    if (sortOrder === "asc") {
      return dobA - dobB;
    } else {
      return dobB - dobA;
    }
  });


      
    
  return (
    <div>
     <br></br>

      
      <Form className={styles.form}>
      <Form.Group controlId="searchNIC">
        
        <Form.Control
          type="text"
          placeholder="Enter NIC"
          value={searchNIC}
          onChange={(e) => setSearchNIC(e.target.value)}
          className={styles.searchField}
        />
      </Form.Group>
    </Form>
      

<br />
      <TableContainer component={Paper}>
      <Table>
  <TableHead>
    <TableRow>
      <TableCell>#</TableCell>
      <TableCell>First Name</TableCell>
      <TableCell>Middle Name</TableCell>
      <TableCell>Last Name</TableCell>
      <TableCell>NIC</TableCell>
      <TableCell>Gender</TableCell>
      <TableCell>Address</TableCell>
      <TableCell>Mobile No</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Own Vehicle</TableCell>
      <TableCell>Drive Type</TableCell>
      <TableCell>Marriage Status</TableCell>
      <TableCell>
        <span onClick={handleSort}>Date of Birth</span>
      </TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {filteredUsers.map((user, index) => (
      <TableRow key={user._id}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{user.firstname}</TableCell>
        <TableCell>{user.middleName || "-"}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.nic || "-"}</TableCell>
        <TableCell>{user.gender}</TableCell>
        <TableCell>{user.address}</TableCell>
        <TableCell>{user.mobileNo}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          {user.ownvehicle.map((vehicle) => (
            <div key={vehicle._id}>{vehicle.registrationNo}</div>
          ))}
        </TableCell>
        <TableCell>
          {user.driveType.map((drive) => (
            <div key={drive._id}>
              <br />
              {drive.name}
            </div>
          ))}
        </TableCell>
        <TableCell>{user.mariageStatus}</TableCell>
        <TableCell>{new Date(user.dob).toDateString()}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

      </TableContainer>
    </div>
  );
};

export default CitizenAll;
