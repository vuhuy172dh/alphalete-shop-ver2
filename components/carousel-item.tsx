import { useCallback, useContext, useEffect } from 'react';
import { CarouselContext } from '../utils/carousel';
import styles from '../styles/carousel.module.css';

interface Props {
  index: number;
  children: JSX.Element;
}

const CarouselItem = ({ index, children }: Props) => {
  const { selectedIndex } = useContext(CarouselContext);
  const isActive = selectedIndex === index;

  return (
    <div className={`${styles.slide} ${isActive ? 'active' : ''}`}>
      {children}
    </div>
  );
};

export default CarouselItem;
