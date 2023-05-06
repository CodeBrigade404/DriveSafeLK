import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function PayFine() {
  const [fines, setFines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get("http://localhost:5000/driveSafe/payfine");
        console.log("Fines:", response.data);
        setFines(response.data);
      } catch (error) {
        console.error("Error retrieving fines:", error);
      }
    }

    fetchData();
  }, []);

  const handleEdit = (fineId) => {
    // Perform edit action for fineId
  };

  const handleDelete = (fineId) => {
    // Perform delete action for fineId
  };

  const filteredFines = fines.filter(
    (item) =>
      item.citizenName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.citizenNIC.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.finesOfCitizens.some((fine) =>
        fine.fineId.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      item.finesOfCitizens.some((fine) =>
        fine.fineDate.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <Box sx={{ margin: "54px" }}>
      <Typography
        variant='h5'
        component='h2'
        fontWeight='bold'
        fontFamily='Roboto'
        sx={{ textAlign: "center" }}>
        CITIZEN ANNUAL ROAD ACCIDENT ANALYSIS
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography variant='subtitle1' sx={{ mr: 1 }}>
          Search :
        </Typography>
        <TextField
          size='small'
          variant='outlined'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Citizen ID</TableCell>
              <TableCell>Citizen Name</TableCell>
              <TableCell>Fine ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Fine Content</TableCell>
              <TableCell>Fine Evidence</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFines.map((item) =>
              item.finesOfCitizens.map((fine) => (
                <TableRow key={fine.fineId}>
                  <TableCell>{item.citizenNIC}</TableCell>
                  <TableCell>{item.citizenName}</TableCell>
                  <TableCell>{fine.fineId}</TableCell>
                  <TableCell>{fine.fineAmount}</TableCell>
                  <TableCell>
                    {fine.statusOfPaid ? (
                      <Button variant='outlined' sx={{ color: "green" }}>
                        Paid
                      </Button>
                    ) : (
                      <Button variant='outlined' color='error'>
                        Unpaid
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>{fine.fineDate}</TableCell>
                  <TableCell>{fine.fineContent}</TableCell>
                  <TableCell>{fine.fineEvidence}</TableCell>
                  <TableCell>
                    <IconButton aria-label='edit' onClick={() => handleEdit(fine)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton aria-label='delete' onClick={() => handleDelete(fine)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
