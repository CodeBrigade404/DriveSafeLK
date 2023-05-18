import {
  Box,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VehicleDetails = () => {
  const { id } = useParams();
  console.log(id);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState({
    regNo: "",
    chassiNo: "",
    vehicleType: "",
    color: "",
    vehicleModel: "",
    yearOfManufacture: "",
    vehicleOwners: "",
    status: "",
  });

  useEffect(() => {
    fetch(
      `http://ec2-52-62-234-207.ap-southeast-2.compute.amazonaws.com:5200/api/vehicles/search_id/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setInitialValues(data);
        setIsLoading(false); // set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching vehicle details:", error);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // or replace with a loading spinner
  }
  const handleFormSubmit = (values) => {
    console.log(values);
    axios
      .patch(
        `http://ec2-52-62-234-207.ap-southeast-2.compute.amazonaws.com:5200/api/vehicles/${id}`,
        values
      )
      .then((response) => {
        console.log("Form Editeds successfully!");
        alert("Vehicle Updated Successfully");
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  const handleDelete = () => {
    axios
      .delete(
        `http://ec2-52-62-234-207.ap-southeast-2.compute.amazonaws.com:5200/api/vehicles/${id}`
      )
      .then((response) => {
        console.log("Form Editeds successfully!");
        console.log("deleted");
        alert("Vehicle Deleted Successfully");
        window.location.href = "http://localhost:3000/vehicles/";
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <Box
      sx={{
        pt: 6,
        pb: 14,
      }}
    >
      <Container>
        <Divider>
          <Chip
            label={`Vehicle : Register Number - ${initialValues.regNo}`}
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
                  mt: 5,
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
                  sx={{
                    gridColumn: "span 2",
                  }}
                  disabled={!isEditing}
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
                  disabled={!isEditing}
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
                    disabled={!isEditing}
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
                  disabled={!isEditing}
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
                  disabled={!isEditing}
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
                  disabled={!isEditing}
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
                    disabled={!isEditing}
                  >
                    <MenuItem value="fine">Fine</MenuItem>
                    <MenuItem value="stolen">Stolen</MenuItem>
                    <MenuItem value="missing">Missing</MenuItem>
                  </Select>
                </FormControl>

                {values.vehicleOwners.map((owner, index) => (
                  <TextField
                    key={index}
                    fullWidth
                    variant="filled"
                    type="text"
                    label={`Vehicle Owner ${index + 1}`}
                    onBlur={handleBlur}
                    onChange={(e) => {
                      const updatedOwners = [...values.vehicleOwners];
                      updatedOwners[index] = e.target.value;
                      setFieldValue("vehicleOwners", updatedOwners);
                    }}
                    value={owner}
                    name={`owners[${index}]`}
                    error={
                      !!touched.owners?.[index] && !!errors.owners?.[index]
                    }
                    helperText={
                      touched.owners?.[index] && errors.owners?.[index]
                    }
                    sx={{
                      gridColumn: "span 1",
                    }}
                    disabled={!isEditing}
                  />
                ))}
              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                {!isEditing && (
                  <Button
                    sx={{
                      backgroundColor: "#263238",
                      mr: 10,
                      width: 200,
                    }}
                    variant="contained"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </Button>
                )}
                {isEditing && (
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#263238",
                      mr: 10,
                      width: 200,
                    }}
                  >
                    Save
                  </Button>
                )}
                <Button
                  color="error"
                  variant="contained"
                  onClick={handleDelete}
                  disabled={isEditing}
                  sx={{
                    backgroundColor: "#263238",
                    width: 200,
                  }}
                >
                  Delete
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
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

export default VehicleDetails;
