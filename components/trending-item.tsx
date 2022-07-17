import styles from '../styles/trending-carousel.module.css';

interface Props {
  index: number;
  children: JSX.Element;
}

const TrendingItem = ({ index, children }: Props) => {
  return <div className={styles.slide}>{children}</div>;
};

export default TrendingItem;
