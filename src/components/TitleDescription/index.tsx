import styles from './styles.module.scss';

export type TitleDescription = {
  title: string;
  description: string;
};

export function TitleDescription({ title, description }: TitleDescription) {
  return (
    <>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </>
  );
}
