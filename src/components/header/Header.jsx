import React from 'react';
import './Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from "/assets/logo.png";
import toast from 'react-hot-toast';

export default function Header({ children }) {
    const navigate = useNavigate();
    const location = useLocation(); // Adiciona useLocation para obter a rota atual
    const userName = sessionStorage.getItem('userName');
    const userMail = sessionStorage.getItem('userMail');

    function handleLogout() {
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userMail');
        sessionStorage.removeItem('userName');
        navigate('/login');
        toast("Obrigado por utilizar o hAppVida Fitness. Volte sempre!")
    }

    // Verifica se a rota atual é /cadastro ou /login
    const isLogoutButtonHidden = location.pathname === '/cadastro' || location.pathname === '/login';

    return (
      <div className='headerContainer'>
        <header className="header">
            <div className="header-icon">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="header-user-info">
                <span>Olá! Seja bem-vindo(a) {userName}</span>
                <b><span>{userMail}</span></b>
                {!isLogoutButtonHidden && (
                  <div id='logoutContainer'>
                      <button id="logoutButton" onClick={handleLogout}>Logout</button>
                  </div>
                )}
            </div>
        </header>
        {children}
      </div>
    );
};

