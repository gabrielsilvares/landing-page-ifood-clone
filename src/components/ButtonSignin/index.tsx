import styles from './styles.module.scss';

export type ButtonProps = {
  title: string;
  background?: boolean;
  signin?: boolean;
};

export function ButtonSignin({ title, background = true }: ButtonProps) {
  return background ? (
    <button className={styles.button}>
      <span>{title}</span>
    </button>
  ) : (
    <button className={styles.buttonBgNone}>
      <span>{title}</span>
    </button>
  );
}
