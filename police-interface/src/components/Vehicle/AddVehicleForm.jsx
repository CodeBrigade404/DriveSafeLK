import axios from "axios";
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Typography,
  Divider,
  FormControl,
} from "@mui/material";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFormSubmit = (values) => {
    console.log(values);
    const res = axios
      //http://ec2-52-62-234-207.ap-southeast-2.compute.amazonaws.com:5200/api/vehicles
      .post("http://3.26.196.154:5200/api/vehicles/add", values)
      .then((response) => {
        console.log("Form submitted successfully!");
        alert("Vehicle Added Successfully");
        window.location.href = "http://localhost:3000/vehicles/";
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file); // Update the selected file in the state
  };

  // Update this function to use the selectedFile from state
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      axios
        .post("http://3.26.196.154:5200/api/vehicles", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("File uploaded successfully!");
          console.log(response);
          alert("File Uploaded and Vehicles Added Successfully");
          window.location.href = "http://localhost:3000/vehicles/";
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
        });
    } else {
      alert("Please select a file before uploading.");
    }
  };
  return (
    <Box
      sx={{
        pt: 6,
        pb: 6,
      }}
    >
      <Container>
        <Divider>
          <Chip
            label="Add Authorized Vehicle Details"
            component="h1"
            sx={{
              color: "white",
              backgroundColor: "#263238",
              fontSize: "23px",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
          ></Chip>
        </Divider>
      </Container>
      <Box m="20px" ml="70px" mt="40px" mr="50px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Register Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.regNo}
                  name="regNo"
                  error={!!touched.regNo && !!errors.regNo}
                  helperText={touched.regNo && errors.regNo}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Chassis Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.chassiNo}
                  name="chassiNo"
                  error={!!touched.chassiNo && !!errors.chassiNo}
                  helperText={touched.chassiNo && errors.chassiNo}
                  sx={{ gridColumn: "span 2" }}
                />
                <FormControl variant="filled" sx={{ gridColumn: "span 2" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Vehicle Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={values.vehicleType}
                    onChange={handleChange}
                    name="vehicleType"
                    error={!!touched.vehicleType && !!errors.vehicleType}
                    helperText={touched.vehicleType && errors.vehicleOwners}
                  >
                    <MenuItem value="car">Car</MenuItem>
                    <MenuItem value="bike">Bike</MenuItem>
                    <MenuItem value="bus">Bus</MenuItem>
                    <MenuItem value="truck">Truck</MenuItem>
                    <MenuItem value="van">Van</MenuItem>
                    <MenuItem value="jeep">Jeep</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Color"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.color}
                  name="color"
                  error={!!touched.color && !!errors.color}
                  helperText={touched.color && errors.color}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Vehicle Model"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.vehicleModel}
                  name="vehicleModel"
                  error={!!touched.vehicleModel && !!errors.vehicleModel}
                  helperText={touched.vehicleModel && errors.vehicleModel}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Year of Manufacture"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.yearOfManufacture}
                  name="yearOfManufacture"
                  error={
                    !!touched.yearOfManufacture && !!errors.yearOfManufacture
                  }
                  helperText={
                    touched.yearOfManufacture && errors.yearOfManufacture
                  }
                  sx={{ gridColumn: "span 1" }}
                />

                <FormControl variant="filled" sx={{ gridColumn: "span 1" }}>
                  <InputLabel id="demo-simple-select-filled-label">
                    Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    error={!!touched.status && !!errors.status}
                    helperText={touched.status && errors.status}
                  >
                    <MenuItem value="fine">Fine</MenuItem>
                    <MenuItem value="stolen">Stolen</MenuItem>
                    <MenuItem value="missing">Missing</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Vehicle Owner 1" // Updated label for the first owner field
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.owners[0]} // Access the first owner value
                  name="owners[0]" // Use array syntax for the field name
                  error={
                    !!touched.owners && !!errors.owners && !!errors.owners[0]
                  }
                  helperText={
                    touched.owners && errors.owners && errors.owners[0]
                  }
                  sx={{ gridColumn: "span 1" }}
                />

                {values.owners.slice(1).map((owner, index) => (
                  <TextField
                    key={index}
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Vehicle Owner ${index + 2}`} // Updated label for additional owner fields
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={owner}
                    name={`owners[${index + 1}]`} // Use array syntax for the field name
                    error={
                      !!touched.owners &&
                      !!errors.owners &&
                      !!errors.owners[index + 1]
                    }
                    helperText={
                      touched.owners &&
                      errors.owners &&
                      errors.owners[index + 1]
                    }
                    sx={{ gridColumn: "span 1" }}
                  />
                ))}

                <Button
                  type="button"
                  onClick={() => {
                    setFieldValue("owners", [...values.owners, ""]); // Add an empty owner field
                  }}
                  color="secondary"
                  variant="contained"
                  sx={{
                    backgroundColor: "#263238",
                    width: "15%",
                    height: "50px",
                  }}
                >
                  +
                </Button>
              </Box>
              <Box display="flex" justifyContent="end" mt="20px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ backgroundColor: "#263238", width: "15%" }}
                >
                  Add a New Vehicle
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        <Divider
          color="#040509"
          sx={{ m: "50px 0 50px 0", border: "2px solid #040509" }}
        />

        <Box>
          <Typography
            variant="h5"
            color={"#040509"}
            sx={{ m: "10px 0 10px 0", display: "inline-block" }}
          >
            If you have the cvs file you can upload from here
            <Box sx={{ color: "red", display: "inline-block", ml: "30px" }}>
              (Only csv files are uploadable)
            </Box>
          </Typography>
        </Box>
        <Input
          type="file"
          onChange={handleFileChange}
          sx={{
            display: "inline-block",
          }}
        />
        <Box display="flex" justifyContent="end">
          <Button
            onClick={handleUpload}
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ backgroundColor: "#263238", width: "15%" }}
          >
            Upload the csv File
          </Button>
        </Box>
      </Box>{" "}
    </Box>
  );
};

const initialValues = {
  regNo: "",
  chassiNo: "",
  vehicleType: "",
  color: "",
  vehicleModel: "",
  yearOfManufacture: "",
  owners: [""], // Initialize with one empty owner field
  status: "",
};

const checkoutSchema = yup.object().shape({
  regNo: yup.string().required("Registration Number required"),
  chassiNo: yup.string().required("ChassiNo Required"),
  color: yup.string().required("Color required"),
  vehicleModel: yup.string().required("vehicleModel required"),
  yearOfManufacture: yup.string().required("Year Of Manufacture required"),
  owners: yup
    .array()
    .of(yup.string().required("Vehicle Owner required"))
    .min(1, "At least one Vehicle Owner is required"),
  vehicleType: yup.string().required("Vehicle Type required"),
  status: yup.string().required("Status required"),
});

export default Form;
