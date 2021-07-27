import styles from './styles.module.scss';

export type CardProps = {
  title: string;
  src: string;
  buttonTitle: string;
  bgColor: string;
  buttonColor: string;
};

export function Card({
  title,
  src,
  buttonTitle,
  bgColor,
  buttonColor,
}: CardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.categories} style={{ background: `${bgColor}` }}>
        <div className={styles.containerInfo}>
          <p className={styles.title}>{title}</p>
          <figure className={styles.imageContainer}>
            <img src={src} alt={buttonTitle} className={styles.image} />
          </figure>
          <div
            className={styles.cardButton}
            style={{ background: `${buttonColor}` }}
          >
            {buttonTitle}
            <span className={styles.arrowContainer}>
              <img
                className={styles.arrow}
                src="assets/images/arrow-right.svg"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
