import style from './Login.module.sass';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { LoginCreate } from './LoginCreate';
import { LoginPasswordLost } from './LoginPasswordLost';
import { LoginPasswordReset } from './LoginPasswordReset';

export const Login = () => {
  return (
    <section className={style.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="perdeu" element={<LoginPasswordReset />} />
      </Routes>
    </section>
  );
};
