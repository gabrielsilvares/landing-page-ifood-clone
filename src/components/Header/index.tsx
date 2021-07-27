import { Menu } from '../Menu';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <img src="assets/images/logo.png" alt="" className={styles.logo} />
      <Menu />
    </header>
  );
}
