import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Notices from "./Notices";

export default function Dashboard() {
  return (
    <Box>
      <Notices />
      <Typography
        variant='h4'
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
        Dashboard
      </Typography>
    </Box>
  );
}
