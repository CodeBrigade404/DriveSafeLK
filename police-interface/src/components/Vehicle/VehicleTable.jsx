import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
const VehicleTable = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data } = await axios.get("http://localhost:5200/api/vehicles");

      setVehicles(data);
    };
    fetchVehicles();
  }, []);

  const columns = [
    { field: "regNo", headerName: "Register Number", flex: 1 },
    { field: "chassiNo", headerName: "Chassis Number", flex: 1 },
    { field: "vehicleType", headerName: "Vehicle Type", flex: 1 },
    { field: "color", headerName: "Color", flex: 1 },
    { field: "vehicleModel", headerName: "Vehicle Model", flex: 1 },
    {
      field: "yearOfManufacture",
      headerName: "Year of Manufacture",
      type: "number",
      flex: 1,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "vehicleOwners",
      headerName: "Vehicle Owners",
      flex: 1,
      valueGetter: (params) => params.row.vehicleOwners.join(", "),
    },
    { field: "status", headerName: "Status", flex: 1 },
  ];

  return (
    <Box m="20px" ml="50px">
      <Box mt="20px">
        <Typography
          variant="h4"
          color={"#040509"}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          Vehicle Details
        </Typography>
      </Box>
      <Box
        m="20px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#2e7c67",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#a4a9fc",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "#f2f0f0",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#a4a9fc",
          },
          "& .MuiCheckbox-root": {
            color: `${"#1e5245"} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"#141414"} !important`,
          },
        }}
      >
        <DataGrid
          rows={vehicles}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row.regNo}
        />
      </Box>
    </Box>
  );
};

export default VehicleTable;
