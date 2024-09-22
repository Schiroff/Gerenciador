// src/components/ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// Componente para rotas protegidas
interface ProtectedRouteProps {
  component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('isAuthenticated'); // Verifica se o usuário está autenticado

  return isAuthenticated ? <Component /> : <Navigate to="/login" />; // Redireciona para a página de login se não estiver autenticado
};

export default ProtectedRoute;
