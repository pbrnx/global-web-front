import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import '../scss/Form.scss';
import toast from 'react-hot-toast';


function Cadastro() {
  document.title = "hAppVida Fitness | Cadastre-se";
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const history = useNavigate();

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };

  // Função para verificar se o e-mail já existe na base de dados
  const verifyUserExists = async (emailToCheck) => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários.');
      }
      const users = await response.json();
      return users.some(user => user.email === emailToCheck);
    } catch (error) {
      console.error('Erro ao verificar o usuário:', error);
      return false; // Se houver erro, prosseguir como se o usuário não existisse
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifica se todos os campos foram preenchidos e se o e-mail é válido
    const checkMail = email.trim();
    if (nome.length === 0 || email.length === 0 || senha.length === 0 || !checkboxChecked || !checkMail.includes('@')) {
      toast.error("Verifique se preencheu todos os campos corretamente!");
      return;
    }

    // Verifica se o e-mail já está cadastrado
    const emailExists = await verifyUserExists(email);
    if (emailExists) {
      toast.error("Este email já está cadastrado!");
      return;
    }

    // Se o e-mail não existir, prossegue com o cadastro
    const newUser = {
      nome,
      email,
      senha,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar. Tente novamente.');
      }

      toast.success('Cadastro realizado com sucesso! \nObrigado por fazer parte do hAppVida Fitness');
      history('/login');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>

      <h1>Cadastre-se e faça parte do nosso projeto!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="loginUsername">Nome:</label>
        <input type="text" placeholder='Digite seu nome completo'  value={nome} onChange={handleNomeChange} />
        <br />

        <label htmlFor="loginPassword">Email:</label>
        <input type="text" placeholder='Digite seu Email' value={email} onChange={handleEmailChange} />
        <br />

        <label htmlFor="loginPassword">Senha:</label>
        <input type="password" id="loginPassword" placeholder="Digite sua senha" value={senha} onChange={handleSenhaChange} />
        <br />

        <input type="checkbox" id="checkbox" checked={checkboxChecked} onChange={handleCheckboxChange} />
        <label htmlFor="checkbox">Aceito os termos e condições</label>
        <br />

        <button type="submit" id="cadastroButton">Cadastrar</button>
        <h2>Já tem uma conta? <Link to="/login">Clique aqui e faça seu Login</Link></h2>
      </form>
    </>
  );
}

export default Cadastro;
