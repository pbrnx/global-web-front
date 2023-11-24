import React from 'react';
import "../index.css";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Página Não Encontrada</h1>
    <h1><Link to="/">Voltar para a Home</Link></h1>
    </div>
  );
};

export default NotFound;