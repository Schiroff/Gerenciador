// src/pages/Home.tsx
import React from 'react';
import '../styles/Home.css'; // Importa o CSS atualizado

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
        <p>
          Controle suas finanças de forma simples e eficaz. Adicione suas receitas e despesas, 
          acompanhe seu saldo e veja gráficos que ajudam a visualizar seu fluxo de caixa.
        </p>
      </header>
      <section className="home-features">
        <div className="feature">
          <h2>Gestão de Receitas</h2>
          <p>Adicione suas fontes de renda e acompanhe seus ganhos mensais.</p>
        </div>
        <div className="feature">
          <h2>Controle de Despesas</h2>
          <p>Registre todas as suas despesas para manter o controle do seu orçamento.</p>
        </div>
        <div className="feature">
          <h2>Relatórios Detalhados</h2>
          <p>Visualize relatórios detalhados e gráficos para uma melhor compreensão das suas finanças.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
