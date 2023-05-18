import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Box, Typography, Button, TextField } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import { useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ViewSingleComplaint() {
  const { id } = useParams();
  const [complaint, setComplaint] = useState(null);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5300/api/complaints/${id}`
        );
        setComplaint(response.data);
      } catch (error) {
        console.error("Error fetching complaint:", error);
      }
    };

    fetchComplaint();
  }, []);

  if (!complaint) {
    return <div>Loading...</div>; // or show a loading spinner
  }

  const handleStatusChange = async (complaintId, status) => {
    try {
      await axios.patch(`http://localhost:5300/api/complaints/${complaintId}`, {
        status,
      });
      setComplaint((prevComplaint) => ({
        ...prevComplaint,
        status: status,
      }));
    } catch (error) {
      console.error("Error updating complaint status:", error);
    }
  };

  const replyHandler = (e) => {
    setComplaint((prevComplaint) => ({
      ...prevComplaint,
      reply: e.target.value,
    }));
  };

  const replySubmitHandler = async () => {
    try {
      const res = await axios.patch(
        `http://localhost:5300/api/complaints/reply/${complaint._id}`,
        { reply: complaint.reply }
      );
      if (res.data.status === "success") {
        alert("Reply sent successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating complaint status:", error);
    }
  };

  return (
    <Box
      sx={{
        pt: 6,
        pb: 5,
      }}
    >
      <Container>
        <Divider>
          <Chip
            label={`Complaint ID - ${complaint.complaintID}`}
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
        <Box sx={{ flexGrow: 1, mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                color={"#040509"}
                fontWeight="bold"
                align="left"
                sx={{ m: "0 0 5px 0" }}
              >
                Citizen NIC - {complaint.nic}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h6"
                color={"#040509"}
                fontWeight="bold"
                align="center"
                sx={{ m: "0 0 5px 0" }}
              >
                Citizen Name - {complaint.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
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
            <Grid item xs={3}>
              <Typography
                variant="h6"
                color={"#040509"}
                fontWeight="bold"
                align="right"
                sx={{ m: "0 0 5px 0" }}
              >
                Status
              </Typography>

              <Box sx={{ textAlign: "right" }}>
                <select
                  value={complaint.status}
                  onChange={(e) =>
                    handleStatusChange(complaint._id, e.target.value)
                  }
                >
                  <option value="Processing">Processing</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Item sx={{ height: 330, backgroundColor: "#f2f0f0" }}>
                <Box>
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
                    {complaint.description}
                  </p>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={5}>
              <Item>
                <ImageList cols={3} rowHeight={164} sx={{ height: 300 }}>
                  {complaint.evidence.map((item, index) => (
                    <ImageListItem key={index}>
                      <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={`Evidence ${index + 1}`}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Item>
            </Grid>
            <Grid item xs={10}>
              <Typography
                variant="h6"
                color={"#040509"}
                fontWeight="bold"
                align="left"
                sx={{ m: "0 0 5px 0" }}
              >
                Reply
              </Typography>
              <TextField
                sx={{ width: "100%" }}
                id="filled-multiline-static"
                label="Add reply here"
                multiline
                rows={7}
                variant="filled"
                onChange={replyHandler}
                value={complaint.reply}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                sx={{
                  backgroundColor: "#263238",
                  mt: 5,
                  width: "80%",
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontFamily: "Roboto",
                  "&:hover": {
                    backgroundColor: "#263238",
                  },
                  fontSize: "15px",
                }}
                onClick={replySubmitHandler}
              >
                add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
