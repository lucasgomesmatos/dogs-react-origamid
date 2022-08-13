import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/img/dogs.svg';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';

export const Header = () => {
  const { data, userLogout } = useContext(UserContext);

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
            {data ? (
              <NavLink className={styles.login} to="/conta">
                {data.nome}
                <button onClick={userLogout}>sair</button>
              </NavLink>
            ) : (
              <NavLink className={styles.login} to="/login">
                Login / Criar
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
