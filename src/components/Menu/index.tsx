import { ButtonSignin } from '../ButtonSignin';
import styles from './styles.module.scss';

export function Menu() {
  return (
    <>
      <nav className={styles.nav}>
        <a className={styles.darkLink} href="">
          Entregador
        </a>
        <a className={styles.darkLink} href="">
          Restaurante e Meracado
        </a>
        <a className={styles.darkLink} href="">
          Carreiras
        </a>
        <a className={styles.darkLink} href="">
          IFood Empresas
        </a>
      </nav>
      <ButtonSignin title="criar conta" background={false} />
      <ButtonSignin title="Entrar" />
    </>
  );
}
