// src/pages/Dashboard.tsx
import React, { useState } from 'react';
import '../styles/Dashboard.css';
import FinancialChart from '../components/FinancialChart'; // Importar o componente de gráfico

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: 'Income', description: 'Salary', amount: 3000, date: '2024-09-01' },
    { id: 2, type: 'Expense', description: 'Rent', amount: 1200, date: '2024-09-05' },
    { id: 3, type: 'Expense', description: 'Groceries', amount: 800, date: '2024-09-10' },
  ]);
  const [newTransaction, setNewTransaction] = useState({
    type: 'Income',
    description: '',
    amount: '',
    date: '',
  });

  const handleAddTransaction = () => {
    if (newTransaction.description && newTransaction.amount && newTransaction.date) {
      const updatedTransactions = [
        ...transactions,
        {
          id: transactions.length + 1,
          ...newTransaction,
          amount: parseFloat(newTransaction.amount),
        },
      ];
      setTransactions(updatedTransactions);
      setNewTransaction({ type: 'Income', description: '', amount: '', date: '' });
    }
  };

  const handleRemoveTransaction = (id: number) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  // Cálculo dos totais
  const income = transactions
    .filter(transaction => transaction.type === 'Income')
    .reduce((total, transaction) => total + transaction.amount, 0);
  
  const expenses = transactions
    .filter(transaction => transaction.type === 'Expense')
    .reduce((total, transaction) => total + transaction.amount, 0);

  const balance = income - expenses;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <FinancialChart income={income} expenses={expenses} /> {/* Adiciona o gráfico */}
      
      <div className="summary">
        <div className="summary-card income">
          <h3>Renda Total</h3>
          <p>R$ {income.toFixed(2)}</p>
        </div>
        <div className="summary-card expense">
          <h3>Despesas Totais</h3>
          <p>R$ {expenses.toFixed(2)}</p>
        </div>
        <div className="summary-card balance">
          <h3>Saldo Restante</h3>
          <p>R$ {balance.toFixed(2)}</p>
        </div>
      </div>

      <div className="add-transaction">
        <h2>Adicionar Transação</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAddTransaction(); }}>
          <div className="form-group">
            <label htmlFor="type">Tipo:</label>
            <select
              id="type"
              value={newTransaction.type}
              onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value })}
            >
              <option value="Income">Renda</option>
              <option value="Expense">Despesa</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição:</label>
            <input
              id="description"
              type="text"
              value={newTransaction.description}
              onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Valor:</label>
            <input
              id="amount"
              type="number"
              value={newTransaction.amount}
              onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Data:</label>
            <input
              id="date"
              type="date"
              value={newTransaction.date}
              onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
            />
          </div>
          <button type="submit" className="add-button">Adicionar</button>
        </form>
      </div>

      <div className="transactions">
        <h2>Transações Recentes</h2>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.description}</td>
                <td className={transaction.type === 'Expense' ? 'expense' : 'income'}>
                  R$ {transaction.amount.toFixed(2)}
                </td>
                <td>
                  <button className="remove-button" onClick={() => handleRemoveTransaction(transaction.id)}>
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
