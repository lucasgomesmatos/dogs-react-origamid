import style from './Header.module.sass';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={style.header}>
      <nav className="container">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login / Criar</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
