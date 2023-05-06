import * as React from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ViewSingleComplaint() {
  return (
    <Box m="20px" ml="70px" mt="40px" mr="50px">
      <Typography
        variant="h4"
        color={"#040509"}
        fontWeight="bold"
        fontFamily="roboto"
        align="left"
        sx={{ m: "0 0 30px 0" }}
      >
        Complaint Id- CI00019
      </Typography>

      <Box sx={{ flexGrow: 1, mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              color={"#040509"}
              fontWeight="bold"
              align="left"
              sx={{ m: "0 0 5px 0" }}
            >
              Citizen NIC- 200020002790
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              color={"#040509"}
              fontWeight="bold"
              align="center"
              sx={{ m: "0 0 5px 0" }}
            >
              Citizen Name- T.K.G.Dharmasiri
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="h6"
              color={"#040509"}
              fontWeight="bold"
              align="right"
              sx={{ m: "0 0 5px 0" }}
            >
              Category- Car crash
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Box backgroundColor="#f2f0f0">
              <Typography
                variant="h6"
                color={"#040509"}
                fontWeight="bold"
                align="left"
                sx={{ m: "0 0 5px 0" }}
              >
                Description
              </Typography>
              <p
                variant="h6"
                color={"#040509"}
                align="left"
                sx={{ m: "0 0 5px 0" }}
              >
                Officer, I witnessed a car crash that occurred at the
                intersection of Main Street and Elm Street at approximately 3:30
                pm today. Two vehicles were involved in the accident, a red
                sedan and a blue SUV. The red sedan was traveling east on Main
                Street and had the green light, while the blue SUV was traveling
                north on Elm Street and had a stop sign. As the red sedan
                entered the intersection, the blue SUV failed to stop at the
                stop sign and collided with the sedan. The impact of the crash
                caused the sedan to spin and hit a nearby traffic light pole.
                Both drivers appeared to be conscious and were able to exit
                their vehicles. However, the driver of the sedan was visibly
                shaken and complained of back pain. An ambulance arrived on the
                scene shortly after and took the driver to the hospital for
                further evaluation. I would be happy to provide any additional
                information that may be helpful in your investigation.
              </p>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Item>
              <ImageList cols={3} rowHeight={164} sx={{ height: 300 }}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
const itemData = [
  {
    img: "https://www.bressmanlaw.com/wp-content/uploads/2020/07/car-accidents-what-is-considered-a-serious-car-accident.jpg",
    title: "Breakfast",
  },
  {
    img: "https://www.oconnorpersonalinjury.com/wp-content/uploads/2021/04/hit-and-run-1200x900.jpg",
    title: "Burger",
  },
  {
    img: "https://media.philstar.com/photos/2023/02/11/misamis-oriental-accident_2023-02-11_17-36-10.jpg",
    title: "Camera",
  },
  {
    img: "https://static.toiimg.com/photo/96620650.cms",
    title: "Coffee",
  },
  {
    img: "https://cdn.hirunews.lk/Data/news_uploads/202111/286972_6.jpg",
    title: "Hats",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVeOKIuueaFvoHHXGToWP44w2DMnMG6Quq1bpEGv_W9BmDDQyaw8JvXE6dJlzvW2mOlMQ&usqp=CAU",
    title: "Honey",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5qC_UFj_HZ6o-uGTHRASy_KtscJ3Mj7ZoQ&usqp=CAU",
    title: "Basketball",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKvpmos1itlPpcgyxh5Jn09WWoD-UaLnqjQ&usqp=CAU",
    title: "Fern",
  },
  {
    img: "https://www.newswire.lk/wp-content/uploads/2022/11/FB_IMG_1669007438415.jpg",
    title: "Mushrooms",
  },
  {
    img: "https://static.toiimg.com/photo/msid-94024791/94024791.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpfcUfiaAM_xThgoXkEuf0OPEMSX3pciF1Eg&usqp=CAU",
    title: "Sea star",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdTKpL4EqyFo_ZzyuwXXRdwKQSgvBEAFFzw&usqp=CAU",
    title: "Bike",
  },
];
