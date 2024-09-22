// src/pages/About.tsx
import React from 'react';
import '../styles/About.css'; // Importa o CSS atualizado

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>Sobre o Criador</h1>
      <img src="/selfie.jpg" alt="Avatar" className="avatar" />
      <h2>Lucas Vinicius Schiroff</h2>
      <p>
        Meu nome é Lucas, sou um aluno de desenvolvimento de software. 
        Estou constantemente em busca de novas oportunidades de aprendizado e atualização.
      </p>
      <p>
        Este site tem como finalidade o aprendizado e o trabalho para desenvolvimento pessoal, 
        e a ampliação das minhas capacidades de desenvolvimento de software.
      </p>
    </div>
  );
};

export default About;
