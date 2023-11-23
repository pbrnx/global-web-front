import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import Logo from "/assets/logo.png";
import toast from 'react-hot-toast';

export default function Header({ children }) {
    const navigate = useNavigate();
    const userToken = sessionStorage.getItem('userToken'); // Obtem o token do usuário
    const userName = sessionStorage.getItem('userName');
    const userMail = sessionStorage.getItem('userMail');

    function handleLogout() {
        sessionStorage.removeItem('userToken');
        sessionStorage.removeItem('userMail');
        sessionStorage.removeItem('userName');
        navigate('/login');
        toast("Obrigado por utilizar o hAppVida Fitness. Volte sempre!");
    }

    // Verifica se o usuário está deslogado
    const isLogoutButtonHidden = !userToken; // O botão é escondido se não houver token

    return (
      <div className='headerContainer'>
        <header className="header">
            <div className="header-icon">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="header-user-info">
                {userToken && ( // Exibe as informações do usuário apenas se estiver logado
                  <>
                    <span>Olá! Seja bem-vindo(a) {userName}</span>
                    <b><span>{userMail}</span></b>
                  </>
                )}
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
