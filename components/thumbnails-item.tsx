import styles from '../styles/thumbnails-carousel.module.css';

interface Props {
  children: JSX.Element;
}

const ThumbnailsItem = ({ children }: Props) => {
  return <div className={styles.slide}>{children}</div>;
};

export default ThumbnailsItem;
