import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

const EfficiencyChart = ({ data }) => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'CapEx (M)',
        data: data.capex,
        backgroundColor: 'rgba(39, 39, 42, 0.5)',
        borderColor: '#71717a',
        borderWidth: 1,
        order: 2,
        type: 'bar',
      },
      {
        label: 'Net Impact Index',
        data: data.impact,
        borderColor: '#D4AF37',
        backgroundColor: 'rgba(212, 175, 55, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#09090b',
        pointBorderColor: '#D4AF37',
        pointRadius: 4,
        order: 1,
        type: 'line',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: '#a1a1aa', font: { family: 'Rajdhani', size: 12, weight: 600 } },
        position: 'top',
        align: 'end',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(9, 9, 11, 0.9)',
        titleColor: '#fff',
        bodyColor: '#D4AF37',
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
        grid: { display: false },
        ticks: { color: '#71717a' },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default EfficiencyChart;
