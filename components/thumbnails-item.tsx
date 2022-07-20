import styles from '../styles/thumbnails-carousel.module.css';

interface Props {
  src: string;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const ThumbnailsItem = ({ src, alt }: Props) => {
  return (
    <div className={styles.slide}>
      <div className={styles.inner__slide}>
        <img src={src} alt={alt} className={styles.slide__img} />
      </div>
    </div>
  );
};

export const ThumbnailsSubItem = ({ src, alt, onClick }: Props) => {
  return (
    <div className={styles.slide__thumb}>
      <div className={styles.inner__thumb__silde} onClick={onClick}>
        <img src={src} alt={alt} className={styles.slide__thumb__img} />
      </div>
    </div>
  );
};

export default ThumbnailsItem;
