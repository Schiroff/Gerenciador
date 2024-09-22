// src/components/Navbar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'; // Atualize o caminho do CSS conforme necessário

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove o token de autenticação
    navigate('/login'); // Redireciona para a tela de login
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/about">Sobre</Link></li>
        <li><button onClick={handleLogout}>Logout</button></li> {/* Botão de logout */}
      </ul>
    </nav>
  );
};

export default Navbar;
