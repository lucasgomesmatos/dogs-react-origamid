import style from './Footer.module.sass';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>Todos os direitos reservados a Dogs {new Date().getFullYear()}</p>
    </footer>
  );
};
