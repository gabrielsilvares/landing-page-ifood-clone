import styles from './style.module.scss';

export type MiniCardProps = {
  title: string;
  src: string;
  color: string;
};

export function MiniCard({ title, src, color }: MiniCardProps) {
  return (
    <div className={styles.container}>
      <figure
        className={styles.imageContainer}
        style={{ background: `${color}` }}
      >
        <img src={src} alt="" className={styles.image} />
      </figure>
      <p className={styles.title}>
        {title}
        <span className={styles.description}>
          <img
            className={styles.arrow}
            src="assets/images/arrow-right2"
            alt=""
          />
        </span>
      </p>
    </div>
  );
}
