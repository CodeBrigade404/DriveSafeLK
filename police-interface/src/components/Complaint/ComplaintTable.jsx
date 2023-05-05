import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

const ComplaintTable = () => {
  const [complaints, setComplaints] = useState([]);

  const handleStatusChange = (complaintId, status) => {
    axios
      .put(`http://localhost:5300/api/complaints/${complaintId}`, { status })
      .then((response) => {
        // update the status of the complaint in the state
        const updatedComplaints = complaints.map((complaint) =>
          complaint._id === complaintId ? { ...complaint, status } : complaint
        );
        setComplaints(updatedComplaints);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5300/api/complaints")
      .then((response) => {
        setComplaints(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    { field: "complaintID", headerName: "Complaint ID", flex: 1 },
    { field: "nic", headerName: "NIC", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        return (
          <select
            value={params.value}
            onChange={(e) => handleStatusChange(params.row._id, e.target.value)}
          >
            <option value="processing">Processing</option>
            <option value="resolves">Resolved</option>
          </select>
        );
      },
    },
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
          Complaint Details
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
          rows={complaints}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};
export default ComplaintTable;
