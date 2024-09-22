// src/components/SummaryCard.tsx
import React from 'react';

interface SummaryCardProps {
  totalIncome: number;
  totalExpenses: number;
  balance: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ totalIncome, totalExpenses, balance }) => {
  return (
    <div className="summary-card">
      <h2>Resumo Financeiro</h2>
      <p><strong>Total de Receitas:</strong> ${totalIncome.toFixed(2)}</p>
      <p><strong>Total de Despesas:</strong> ${totalExpenses.toFixed(2)}</p>
      <p><strong>Saldo:</strong> ${balance.toFixed(2)}</p>
    </div>
  );
};

export default SummaryCard;
