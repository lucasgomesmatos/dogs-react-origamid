import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TOKEN_POST, USER_GET } from '../../../api';
import { Button } from '../../../Components/Form/Button';
import { Input } from '../../../Components/Form/Input';
import { useForm } from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};
