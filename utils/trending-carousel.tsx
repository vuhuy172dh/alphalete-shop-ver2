import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import styles from '../styles/trending-carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowLeft,
  faCircleArrowRight
} from '@fortawesome/free-solid-svg-icons';

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

export const TrendingCarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: 0
});

interface Props {
  children: React.ReactNode;
}

const TrendingCarousel = ({ children }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewportRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    ClassNames()
  ]);
  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);
  return (
    <TrendingCarouselContext.Provider
      value={{ embla: emblaApi, selectedIndex }}
    >
      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles.container}>{children}</div>
      </div>
      <button className={styles.prev_button}>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          style={{
            fontSize: '1.5rem'
          }}
        />
      </button>
      <button className={styles.next_button}>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          style={{
            fontSize: '1.5rem'
          }}
        />
      </button>
    </TrendingCarouselContext.Provider>
  );
};
export default TrendingCarousel;
