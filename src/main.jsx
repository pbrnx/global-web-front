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
  return sessionStorage.getItem('isLoggedIn') === 'true' ? true : false;
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
      {path:"/" , element:<Projeto/>},
      {path:"/cadastro" , element:<Cadastro/>},
      {path:"/login" , element:<Login/>}
    ]}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
