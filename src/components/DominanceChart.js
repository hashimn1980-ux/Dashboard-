import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DominanceChart = ({ data }) => {
  const chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Market Share',
        data: data.share,
        borderColor: '#10B981',
        borderWidth: 2,
        stepped: true,
        pointBackgroundColor: '#09090b',
        pointBorderColor: '#10B981',
        pointRadius: 5,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(9, 9, 11, 0.9)',
        titleColor: '#fff',
        bodyColor: '#10B981',
        borderColor: '#27272a',
        borderWidth: 1,
        displayColors: false,
        titleFont: { family: 'Rajdhani', size: 14 },
        bodyFont: { family: 'JetBrains Mono', size: 12 },
      },
    },
    scales: {
      y: {
        grid: { color: '#27272a', borderDash: [2, 2] },
        ticks: { color: '#71717a' },
      },
      x: {
        grid: { color: '#27272a', borderDash: [2, 2] },
        ticks: { color: '#71717a' },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  return <Line data={chartData} options={options} />;
};

export default DominanceChart;
