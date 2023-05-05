import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
const cards = [
  {
    key: 1,
    image: "https://cdn-icons-mp4.flaticon.com/512/7920/7920916.mp4",
    heading: "Officer Enforcement",
  },
  {
    key: 2,
    image: "https://cdn-icons-mp4.flaticon.com/512/6569/6569129.mp4",
    heading: "License Verification",
  },
  {
    key: 3,
    image: "https://cdn-icons-mp4.flaticon.com/512/9686/9686951.mp4",
    heading: "Traffic Division",
  },
  {
    key: 4,
    image: "https://cdn-icons-mp4.flaticon.com/512/9686/9686933.mp4",
    heading: "Traffic Vehicles Monitoring",
  },
  {
    key: 5,
    image: "https://cdn-icons-mp4.flaticon.com/512/7920/7920880.mp4",
    heading: "Crime Alert",
  },
  {
    key: 6,
    image: "https://cdn-icons-mp4.flaticon.com/512/7920/7920873.mp4",
    heading: " Insurance Validation",
  },
  {
    key: 7,
    image: "https://cdn-icons-mp4.flaticon.com/512/7920/7920847.mp4",
    heading: "Biometrics",
  },
  {
    key: 8,
    image: "https://cdn-icons-mp4.flaticon.com/512/6569/6569138.mp4",
    heading: "Emergency Services",
  },
  // ... add more objects for additional cards
];

export default function Album() {
  const theme = useTheme();
  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}>
        <Container>
          <Typography
            component='h1'
            variant='h5'
            align='center'
            color='text.primary'
            fontFamily={"Roboto"}
            fontWeight={"bold"}
            gutterBottom>
            Sri Lanka Traffic Police force of the Democratic Socialist Republic of Sri Lanka.
          </Typography>
          <Typography color='text.secondary' paragraph>
            DriveSafe is the ultimate resource for safe driving in Sri Lanka. We've partnered with
            the Sri Lanka Traffic Police to provide you with the latest information and guidelines
            on traffic rules and regulations. Our website offers tips on defensive driving, road
            safety, and vehicle maintenance, as well as interactive features to test your knowledge
            and improve your driving skills. Join us today to create a safer driving culture in Sri
            Lanka!
          </Typography>
          <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
            <Button variant='contained'>Manage Traffic E-services</Button>
            <Button variant='outlined'>Citizen Traffic actions</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.key} xs={12} md={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                }}>
                <CardMedia
                  component='video'
                  src={card.image}
                  alt='random'
                  sx={{
                    width: 270,
                    height: 170,
                    [theme.breakpoints.down("sm")]: {
                      width: 200,
                      height: 120,
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant='h6'
                    align='center'
                    fontFamily={"Roboto"}
                    fontWeight={"bold"}>
                    {card.heading}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* <Container sx={{ py: 10 }}>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.key} xs={16} md={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.25)",
                }}>
                <CardMedia
                  component='video'
                  src={card.image}
                  alt='random'
                  sx={{ width: 270, height: 170 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant='h6'
                    align='center'
                    fontFamily={"Roboto"}
                    fontWeight={"bold"}>
                    {card.heading}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </main>
  );
}
