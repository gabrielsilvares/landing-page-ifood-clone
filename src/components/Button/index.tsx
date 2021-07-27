import styles from './styles.module.scss';

export type ButtonProps = {
  title: string;
};

export function Button({ title }: ButtonProps) {
  return <button className={styles.button}>{title}</button>;
}
