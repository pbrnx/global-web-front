import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../scss/Form.scss';
import toast from 'react-hot-toast';
import CryptoJS from 'crypto-js';

export default function Login() {

  document.title = "hAppVida Fitness | Login";
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const history = useNavigate();

  const checkPreviousLogin = () => {
  const isLoggedIn = sessionStorage.getItem('userToken');

    if (isLoggedIn) {
      toast.error('Ocorreu um erro: Você já está logado.');
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

    function gerarToken(email) {
      // Gera a hash SHA-256 do email
      const hashEmail = CryptoJS.SHA256(email).toString();

      // Usa os primeiros 15 caracteres da hash como token
      return hashEmail.substring(0, 15);
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
        const token = gerarToken();
        sessionStorage.setItem('userToken', token);
        sessionStorage.setItem('userName', user.nome);
        sessionStorage.setItem('userMail', user.email);// Guardar informações do usuário no session storage
        toast.success("Login bem sucedido! Bem-vindo(a) " + user.nome + "!");
        history('/');

      } else {
        toast.error("Credenciais de Login não encontradas.");
      }
    } catch (error) {
      toast.error("Erro ao validar o login: " + error.message);
    }
  };

  return (
    <>

      <h1>Faça Login</h1>

      <form>
        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder="Digite seu email" value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" value={senha} onChange={handleSenhaChange} />
        <br />
        <div className='containerLoginButton'>
          <button type="button" id='loginButton' onClick={handleLogin}>Login</button>

        </div>
        <h2>Não tem uma conta? <Link to="/cadastro">Clique aqui e faça seu cadastro</Link></h2>
      </form>

    </>
  );
}


