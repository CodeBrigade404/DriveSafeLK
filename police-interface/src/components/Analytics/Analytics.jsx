import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Analytics.css";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Number of Crimes",
      data: [150, 200, 180, 250, 210, 300, 280, 320, 350, 400, 380, 450],
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
              text: "Number of Crimes",
            },
            suggestedMin: 0,
            suggestedMax: 500,
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
    <div className="crime-line-graph-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Analytics;
