// src/components/FinancialChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface FinancialChartProps {
  income: number;
  expenses: number;
}

const FinancialChart: React.FC<FinancialChartProps> = ({ income, expenses }) => {
  const data = {
    labels: ['Renda', 'Despesas'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#28a745', '#dc3545'],
        borderColor: ['#fff', '#fff'],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: R$ ${tooltipItem.raw.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <div className="financial-chart">
      <h2>Resumo Financeiro</h2>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default FinancialChart;
