import {
  Box,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  FormControl,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

const VehicleDetails = ({ vehicle, updateVehicle, deleteVehicle }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isEditing, setIsEditing] = useState(false);

  const handleFormSubmit = (values) => {
    updateVehicle(values);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteVehicle();
  };

  return (
    <Box m="20px" ml="70px" mt="40px" mr="50px">
      <Typography
        variant="h4"
        color={"#040509"}
        fontWeight="bold"
        sx={{ m: "0 0 20px 0" }}
      >
        Vehicle : Register Number - ABC123
      </Typography>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
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
                value="ABC123"
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
                value="XYZ987"
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
                  value="Car"
                  onChange={handleChange}
                  name="vehicleType"
                  error={!!touched.vehicleType && !!errors.vehicleType}
                  helperText={touched.vehicleType && errors.vehicleOwners}
                  disabled={!isEditing}
                >
                  <MenuItem value="Car">Car</MenuItem>
                  <MenuItem value="Bike">Bike</MenuItem>
                  <MenuItem value="Bus">Bus</MenuItem>
                  <MenuItem value="Truck">Truck</MenuItem>
                  <MenuItem value="Van">Van</MenuItem>
                  <MenuItem value="Jeep">Jeep</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Color"
                onBlur={handleBlur}
                onChange={handleChange}
                value="blue"
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
                value="Toyota Corolla"
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
                value="2,022"
                name="yearOfManufacture"
                disabled={!isEditing}
                error={
                  !!touched.yearOfManufacture && !!errors.yearOfManufacture
                }
                helperText={
                  touched.yearOfManufacture && errors.yearOfManufacture
                }
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vehicle Owners"
                onBlur={handleBlur}
                onChange={handleChange}
                value="Amy Lee, David Nguyen"
                disabled={!isEditing}
                name="vehicleOwners"
                error={!!touched.vehicleOwners && !!errors.vehicleOwners}
                helperText={touched.vehicleOwners && errors.vehicleOwners}
                sx={{ gridColumn: "span 3" }}
              />
              <FormControl variant="filled" sx={{ gridColumn: "span 1" }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  name="status"
                  value="Fine"
                  onChange={handleChange}
                  disabled={!isEditing}
                >
                  <MenuItem value="Fine">Fine</MenuItem>
                  <MenuItem value="Stolen">Stolen</MenuItem>
                  <MenuItem value="Missing">Missing</MenuItem>
                </Select>
              </FormControl>
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
  );
};

const checkoutSchema = yup.object().shape({
  regNo: yup.string().required("Registration Number required"),
  chassiNo: yup.string().required("ChassiNo Required"),
  color: yup.string().required("Color required"),
  vehicleModel: yup.string().required("vehicleModel required"),
  yearOfManufacture: yup.string().required("Year Of Manufacture required"),
  vehicleOwners: yup.string().required(" Vehicle Owners required"),
});

const initialValues = {
  regNo: "",
  lastName: "",
  color: "",
  vehicleModel: "",
  yearOfManufacture: "",
  vehicleOwners: "",
};
export default VehicleDetails;
