import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../scss/Form.scss';

function Login() {
  
  document.title = "hAppVida Fitness | Login";
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
          sessionStorage.setItem('userName', user.nome); // Store user's name in session storage
          history('/'); 
          alert("Login bem sucedido! Bem-vindo(a) " + user.nome + "!");
      } else {
          alert("Credenciais de Login não encontradas.");
      }
  } catch (error) {
      alert("Erro ao validar o login: " + error.message);
  }
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
        
        </div>  
        <h2>Não tem uma conta? <Link to="/cadastro">Clique aqui e faça seu cadastro</Link></h2>
      </form>
      
    </>
  );
}

export default Login;
