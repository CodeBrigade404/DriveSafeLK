import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./Analytics.css";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Number of Crimes",
      data: [150, 180, 150, 150, 160, 200, 240, 120, 150, 200, 310, 200],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const Analytics = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (chartInstance) {
        chartInstance.destroy();
      }
      chartInstance = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Month",
              },
            },
            y: {
              display: true,
              title: {
                display: true,
                text: "Number of Road Accidents",
              },
              suggestedMin: 0,
              suggestedMax: 400,
            },
          },
        },
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartRef]);

  return (
    <Container sx={{ display: "flex", justifyContent: "center" , mt:5 ,mb:5}}>
      <div className='crime-line-graph-container'>
        <Typography
          variant='h5'
          component='h2'
          fontWeight='bold'
          fontFamily='Roboto'
          sx={{ textAlign: "center" }}>
          CITIZEN ANNUAL ROAD ACCIDENT ANALYSIS
        </Typography>
        <canvas ref={chartRef} />
      </div>
    </Container>
  );
};

export default Analytics;
