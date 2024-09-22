// src/components/IncomeExpenseTable.tsx
import React from 'react';
import '../styles/IncomeExpenseTable.css';

interface IncomeExpenseTableProps {
  incomeEntries: number[];
  expenseEntries: number[];
  onAddEntry: () => void;
  onDeleteEntry: (type: 'income' | 'expense', index: number) => void;
}

const IncomeExpenseTable: React.FC<IncomeExpenseTableProps> = ({ incomeEntries, expenseEntries, onAddEntry, onDeleteEntry }) => {
  return (
    <div>
      <h2>Receitas e Despesas</h2>
      <button onClick={onAddEntry}>Adicionar Entrada</button>
      <h3>Receitas</h3>
      <ul>
        {incomeEntries.map((amount, index) => (
          <li key={index}>
            ${amount.toFixed(2)} <button onClick={() => onDeleteEntry('income', index)}>Excluir</button>
          </li>
        ))}
      </ul>
      <h3>Despesas</h3>
      <ul>
        {expenseEntries.map((amount, index) => (
          <li key={index}>
            ${amount.toFixed(2)} <button onClick={() => onDeleteEntry('expense', index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeExpenseTable;
