import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary'>
      {"Copyright © "}
      <Link color='inherit' href='https://mui.com/'>
        DriveSafeLK.lk
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}>
      <Box
        component='footer'
        sx={{
          py: 3,
          px: 2,
          backgroundColor: " #c2c2c2",
          position: "sticky",
          bottom: 0,
        }}>
        <Container maxWidth='sm'>
          <Typography variant='body1'>
            Sri Lanka Police force of the Democratic Socialist Republic of Sri Lanka.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
