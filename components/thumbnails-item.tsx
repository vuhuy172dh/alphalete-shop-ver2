import Link from 'next/link';
import styles from '../styles/thumbnails-carousel.module.css';

interface SubItemProps {
  src: string;
  alt: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ThumbnailsSubItem = ({ src, alt, onClick }: SubItemProps) => {
  return (
    <div className={styles.slide__thumb}>
      <div className={styles.inner__thumb__silde} onClick={onClick}>
        <img src={src} alt={alt} className={styles.slide__thumb__img} />
      </div>
    </div>
  );
};

interface ItemProps {
  src: string;
  alt: string;
  productSlug: string;
}

const ThumbnailsItem = ({ src, alt, productSlug }: ItemProps) => {
  return (
    <div className={styles.slide}>
      <Link href={`/products/${productSlug}`}>
        <div className={styles.inner__slide}>
          <img src={src} alt={alt} className={styles.slide__img} />
        </div>
      </Link>
    </div>
  );
};

export default ThumbnailsItem;
