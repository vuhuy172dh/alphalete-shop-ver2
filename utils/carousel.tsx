import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaEventType
} from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Autoplay from 'embla-carousel-autoplay';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import styles from '../styles/carousel.module.css';
import { isRegExp } from 'util/types';

interface ContextValue {
  embla: EmblaCarouselType | undefined;
  selectedIndex: number;
}

interface Props {
  className?: string;
  children: ReactNode;
}

export const CarouselContext = React.createContext<ContextValue>({
  embla: undefined,
  selectedIndex: -1
});

const Carousel = ({ children, className }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [viewportRef, emblaApi] = useEmblaCarousel(
    {
      loop: true
    },
    [ClassNames()]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  const onInit = useCallback(
    (event: EmblaEventType) => {
      if (!emblaApi) return;
      const isResizeEvent = event === 'resize';
      setIsReady(!isResizeEvent);
      if (isResizeEvent) emblaApi.reInit();
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('init', onInit);
    emblaApi.on('init', onSelect);
    emblaApi.on('resize', onInit);
    emblaApi.on('reInit', onInit);

    emblaApi.internalEngine().translate.toggleActive(false);
    emblaApi.internalEngine().translate.clear();
  }, [emblaApi, onSelect, onInit, isReady]);

  //inactivate transform

  return (
    <CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
      <div
        ref={viewportRef}
        className={`${styles.viewport} ${isReady ? styles.is_ready : ''} 
          } ${className}`}
      >
        <div className={styles.container}>{children}</div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
