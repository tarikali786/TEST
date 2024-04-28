import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./ChartBar.css";
import { Link } from "react-router-dom";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "#DF0B0B"); // Start color
    gradient.addColorStop(1, "#FF6B00"); // End color

    const data = {
      labels: ["2018", "2019", "2020", "2021", "2022"], // Year labels
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56],
          backgroundColor: gradient, // Use the linear gradient as the background color
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          barThickness: 30, // Set the fixed bar width in pixels
          borderRadius: 10,
        },
      ],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        rectangle: {
          borderRadius: "160px", // converting rem to pixels assuming 1rem = 16px
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
      },
    };

    // Destroy the existing chart instance before creating a new one
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new Chart instance
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    // Cleanup when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container mt-5">
      <div className="chart">
        <div className="row p-3">
          <div className="col">
            <h2>Analytics</h2>
            <h3>(Profit)</h3>
          </div>
          <div className="col text-end">
            <div className="dropdown">
              <button className="dropdown-button">Profit</button>
              <div className="dropdown-content">
                <Link>Profit</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdown-button">Month</button>
              <div className="dropdown-content">
                <Link>Month</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropdown-button">Credit</button>
              <div className="dropdown-content">
                <Link >Credit</Link>
              </div>
            </div>
            {/* <select name="profit" id="profir" className="me-2">
              <option value="profit">Profit</option>
            </select>
            <select name="month" id="month">
              <option value="month">Month</option>
            </select> */}
          </div>
        </div>
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default BarChart;
