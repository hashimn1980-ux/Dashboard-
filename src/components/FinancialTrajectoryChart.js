import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const FinancialTrajectoryChart = () => {
  const data = {
    labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
    datasets: [
      {
        label: 'Cashflow',
        data: [-100, -150, -120, -50, 20, 150, 300, 550, 900, 1400],
        borderColor: '#D4AF37',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(212, 175, 55, 0.4)');
          gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
          return gradient;
        },
        borderWidth: 2,
        pointBackgroundColor: '#09090b',
        pointBorderColor: '#D4AF37',
        pointRadius: 4,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
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
        callbacks: {
            label: function(context) {
                return '$' + context.parsed.y + 'k';
            }
        }
      },
    },
    scales: {
      y: {
        grid: { color: '#27272a', borderDash: [5, 5], drawBorder: false },
        ticks: {
          color: '#71717a',
          font: { family: 'JetBrains Mono', size: 10 },
          callback: function (value) {
            return '$' + value + 'k';
          },
        },
      },
      x: {
        grid: { color: '#27272a', drawBorder: false },
        ticks: { color: '#71717a', font: { family: 'JetBrains Mono', size: 10 } },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  return <Line data={data} options={options} />;
};

export default FinancialTrajectoryChart;
