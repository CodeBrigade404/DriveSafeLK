import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import WarningIcon from "@mui/icons-material/Warning";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:
      "Public Notice: It is hereby notified that all citizens are requested to cooperate with the Police and report any suspicious activities in their neighborhoods. Let us work together to maintain law and order in our communities.",
    color: "#9e9e9e",
  },
  {
    label:
      "Traffic Notice: Due to ongoing road construction, traffic flow will be disrupted along Colombo 07 A1 road until further notice. Motorists are advised to use alternative routes and exercise caution while driving.",
    color: "#bdbdbd",
  },
  {
    label:
      "Crime Prevention Notice: To prevent burglaries and thefts, residents are advised to install and activate home security systems, keep their doors and windows locked, and report any suspicious activity to the Police.",
    color: "#e0e0e0",
  },
  {
    label:
      "Security Notice: In view of the recent security threat, all visitors to our premises are requested to undergo a security check before entering. Your cooperation in this regard is highly appreciated.",
    color: "#eeeeee",
  },
];

export default function Notices() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ height: "10vh", width: "100vw" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents>
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  height: "10vh",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  width: "100%",
                  backgroundColor: step.color,
                  padding: "1rem",
                }}>
                <Typography
                  variant='h6'
                  component='h2'
                  sx={{
                    color: "#ff1744",
                    marginBottom: "0.5rem",
                    fontSize: "15px",
                    textAlign: "center",
                  }}>
                  <WarningIcon sx={{ marginRight: "0.5rem" }} />
                  {step.label}
                </Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}
