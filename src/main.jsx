import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Header from './components/header/Header.jsx';


import Cadastro from './routes/Cadastro.jsx';
import Login from './routes/Login';
import Projeto from './routes/Projeto.jsx';
import App from './App.jsx';


// Função para verificar se o usuário está logado
const requireAuth = () => {
  const token = sessionStorage.getItem('userToken');
  const userMail = sessionStorage.getItem('userMail');
  const userName = sessionStorage.getItem('userName');
  const MIN_TOKEN_LENGTH = 15; // Defina o comprimento mínimo que você considera válido para o token

  return token && token.length >= MIN_TOKEN_LENGTH && userMail && userName;
};

// Componente de rota protegida
const ProtectedRoute = ({ children }) => {
  if (!requireAuth()) {
    // Se não estiver logado, redireciona para o login
    return <Navigate to="/login" />;
  }
  return children;
};


const router = createBrowserRouter([
  {path: "/", element:<App/>, 
    children:[
      {path:"/" , element:<ProtectedRoute><Projeto/></ProtectedRoute>},
      {path:"/cadastro" , element:<Cadastro/>},
      {path:"/login" , element:<Login/>}
    ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
