import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Form/Button';
import { Input } from '../../../Components/Form/Input';
import { useForm } from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';
import { Error } from '../../../Helpers/Error';
import style from '../Login.module.sass';
import styleBtn from '../../../Components/Form/Button/Button.module.sass';

export const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };
  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <Input label="usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={style.perdeu} to="/login/perdeu">
        Perdeu a senha ?
      </Link>
      <div className={style.cadastro}>
        <h2 className={style.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta ? Cadastre-se no site.</p>
        <Link className={styleBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
