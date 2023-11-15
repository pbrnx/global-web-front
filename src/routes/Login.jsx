import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../scss/Form.scss';

function Login() {
  function generateToken() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16);
  }
  
  function createSession() {
    if (!sessionStorage.getItem('sessionToken')) {
      sessionStorage.setItem('sessionToken', generateToken());
    } else {
      console.log('Uma sessão já está ativa.');
    }
  }
  
  createSession();
  
  document.title = "Smart Grid | Login";
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useNavigate();

  const checkPreviousLogin = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
      alert('Você já está logado.');
      history('/'); 
      return true; 
    }
    return false; 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    const isAlreadyLoggedIn = checkPreviousLogin();

    if (isAlreadyLoggedIn) {
      return; 
    }

    // Fetch dados da API
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários.');
      }
      const users = await response.json();
      const user = users.find(user => user.email === email.trim() && user.senha === senha.trim());

      if (user) {
        sessionStorage.setItem('isLoggedIn', 'true');
        alert("Login bem sucedido! Bem-vindo(a) " + user.nome + "!");
        history('/'); 
      } else {
        alert("Credenciais de Login não encontradas.");
      }
    } catch (error) {
      alert("Erro ao validar o login: " + error.message);
    }
  };

  const handleLogout = () => {  
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('sessionToken'); 
    sessionStorage.setItem('sessionToken', generateToken());
    alert('Você foi desconectado.');
    history('/'); 
  };

  return (
    <>
      <h1>Faça Login</h1>
      
      <form>
        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder="Digite seu email" required value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" required value={senha} onChange={handleSenhaChange} />
        <br />
        <div className='containerLoginButton'>
          <button type="button" id='loginButton' onClick={handleLogin}>Login</button>
          <button type="button" id='loginButton' onClick={handleLogout}>Logout</button>
        </div>  
        <h2>Não tem uma conta? <Link to="/cadastro">Clique aqui e faça seu cadastro</Link></h2>
      </form>
      
    </>
  );
}

export default Login;
