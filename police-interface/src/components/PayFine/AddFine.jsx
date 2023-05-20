import React, { useState } from "react";
import { TextField, Button, Stack, Card, CardContent, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const AddFine = () => {
  const [citizenNIC, setCitizenNIC] = useState("");
  const [citizenName, setCitizenName] = useState("");
  const [fineAmount, setFineAmount] = useState("");
  const [fineContent, setFineContent] = useState("");
  const [fineEvidence, setFineEvidence] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Create a payload object
    const payload = {
      citizenNIC,
      citizenName,
      fineAmount,
      fineContent,
      fineEvidence,
    };

    // Send the payload to your backend API
    axios
      .post("http://3.27.9.143:4008/driveSafe/payfine/addfine", payload)
      .then((response) => {
        console.log(response.data);
        // Reset the form fields
        setCitizenNIC("");
        setCitizenName("");
        setFineAmount("");
        setFineContent("");
        setFineEvidence("");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Box display='flex' justifyContent='center' alignItems='center' minHeight='100vh'>
      <Card sx={{ width: 400, boxShadow: 3 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{ marginBottom: 4 }}>
              <TextField
                type='text'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                label='Citizen NIC'
                value={citizenNIC}
                onChange={(event) => setCitizenNIC(event.target.value)}
              />
              <TextField
                type='text'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                label='Citizen Name'
                value={citizenName}
                onChange={(event) => setCitizenName(event.target.value)}
              />
            </Stack>
            <Stack spacing={2} sx={{ marginBottom: 4 }}>
              <TextField
                type='number'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                label='Fine Amount'
                value={fineAmount}
                onChange={(event) => setFineAmount(event.target.value)}
              />
              <TextField
                type='text'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                label='Fine Content'
                value={fineContent}
                onChange={(event) => setFineContent(event.target.value)}
              />
            </Stack>
            <Stack spacing={2} sx={{ marginBottom: 4 }}>
              <TextField
                type='text'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                label='Fine Evidence'
                value={fineEvidence}
                onChange={(event) => setFineEvidence(event.target.value)}
              />
            </Stack>
            <Button variant='outlined' color='secondary' type='submit'>
              Add
            </Button>
          </form>
          <small>
            View Fines? <Link to='/payfine'>Click Here</Link>
          </small>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddFine;
