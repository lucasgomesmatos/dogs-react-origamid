import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/img/dogs.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <ul>
          <li>
            <NavLink className={styles.logo} to="/" aria-label="Dogs- Home">
              <img src={logo} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.login} to="/login">
              Login / Criar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
