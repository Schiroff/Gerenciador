// src/components/Modal.tsx
import React, { useState } from 'react';

interface ModalProps {
  onAddEntry: (type: 'income' | 'expense', amount: number) => void;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onAddEntry, onClose }) => {
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = () => {
    onAddEntry(type, amount);
    setAmount(0);
  };

  return (
    <div className="modal">
      <h2>Adicionar Entrada</h2>
      <select value={type} onChange={(e) => setType(e.target.value as 'income' | 'expense')}>
        <option value="income">Receita</option>
        <option value="expense">Despesa</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Valor"
      />
      <button onClick={handleSubmit}>Adicionar</button>
      <button onClick={onClose}>Fechar</button>
    </div>
  );
};

export default Modal;
