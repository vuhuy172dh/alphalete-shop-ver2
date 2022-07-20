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
}

export const TrendingCarouselContext = React.createContext<ContextValue>({
  embla: undefined
});

interface Props {
  children: React.ReactNode;
}

const TrendingCarousel = ({ children }: Props) => {
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 0.07, draggable: false },
    [ClassNames()]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      onSelect();
      emblaApi.on('select', onSelect);
    }
  }, [emblaApi, onSelect]);
  return (
    <TrendingCarouselContext.Provider value={{ embla: emblaApi }}>
      <div ref={viewportRef} className={styles.viewport}>
        <div className={styles.container}>{children}</div>
      </div>
      <button className={styles.prev_button} onClick={scrollPrev}>
        <FontAwesomeIcon
          icon={faCircleArrowLeft}
          style={{
            fontSize: '1.5rem',
            color: prevBtnEnabled ? 'inherit' : 'red'
          }}
        />
      </button>
      <button className={styles.next_button} onClick={scrollNext}>
        <FontAwesomeIcon
          icon={faCircleArrowRight}
          style={{
            fontSize: '1.5rem',
            color: nextBtnEnabled ? 'inherit' : 'red'
          }}
        />
      </button>
    </TrendingCarouselContext.Provider>
  );
};
export default TrendingCarousel;
