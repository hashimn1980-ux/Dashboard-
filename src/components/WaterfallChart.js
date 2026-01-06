import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WaterfallChart = ({ data }) => {
  const chartData = {
    labels: ['Start', 'Ops', 'Tech', 'Mkt', 'Total'],
    datasets: [
      {
        label: 'Value',
        data: data.waterfall,
        backgroundColor: [
          '#71717a',
          '#10B981',
          '#10B981',
          '#F43F5E',
          '#D4AF37',
        ],
        borderWidth: 0,
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
        bodyColor: '#D4AF37',
        borderColor: '#27272a',
        borderWidth: 1,
        displayColors: false,
        titleFont: { family: 'Rajdhani', size: 14 },
        bodyFont: { family: 'JetBrains Mono', size: 12 },
        callbacks: {
          label: function (context) {
            const v = context.raw;
            return `Value: ${v[1] - v[0]}`;
          },
        },
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

export default WaterfallChart;
