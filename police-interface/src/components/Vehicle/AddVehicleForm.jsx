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
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px" ml="70px" mt="40px" mr="50px">
      <Typography
        variant="h4"
        color={"#040509"}
        fontWeight="bold"
        sx={{ m: "0 0 10px 0" }}
      >
        Add Vehicle Details
      </Typography>
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
                value={values.firstName}
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
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Vehicle Owners"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.vehicleOwners}
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
                  value={values.status}
                  onChange={handleChange}
                >
                  <MenuItem value="Fine">Fine</MenuItem>
                  <MenuItem value="Stolen">Stolen</MenuItem>
                  <MenuItem value="Missing">Missing</MenuItem>
                </Select>
              </FormControl>
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
        onChange={(event) => console.log(event.target.files)}
        sx={{
          display: "inline-block",
        }}
      />
      <Box display="flex" justifyContent="end">
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          sx={{ backgroundColor: "#263238", width: "15%" }}
        >
          Upload the csv File
        </Button>
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

export default Form;
