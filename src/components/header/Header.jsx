import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";

export default function Header() {
    const navigate = useNavigate();
    const userName = sessionStorage.getItem('userName'); // Retrieve user's name from session storage
    const userMail = sessionStorage.getItem('userMail');

    function handleLogout() {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userMail');
        sessionStorage.removeItem('userName'); // Remove user's name from session storage
        navigate('/login');
    }

    return (
      <div className='headerContainer'>
        <header className="header">
            <div className="header-icon">
                <span><img src={Logo} /></span>
            </div>
            <div className="header-user-info">
                <span>Olá, {userName}</span> {/* Display user's name */} 
                <b><span>{userMail}</span></b>
                <div id='logoutContainer'>
                    <button id="logoutButton" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </header>
      </div>
    );
};
