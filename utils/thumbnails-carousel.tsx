import React from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import styles from '../styles/thumbnails-carousel.module.css';

interface ContextProps {
  embla: EmblaCarouselType | undefined;
}

export const ThumbnailsCarouselContext = React.createContext<ContextProps>({
  embla: undefined
});

interface Props {
  children: React.ReactNode;
}

const ThumbnailsCarousel = ({ children }: Props) => {
  const [mainViewportRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'start', draggable: false },
    [ClassNames()]
  );
  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel({
    loop: false,
    align: 'start'
  });
  return (
    <ThumbnailsCarouselContext.Provider value={{ embla: emblaApi }}>
      <div className="w-full h-full relative">
        <div ref={mainViewportRef} className={styles.viewport}>
          <div className={styles.container}>{children}</div>
        </div>
      </div>
      <div className="w-full h-full mt-[-12px]">
        <div className={styles.viewport} ref={thumbViewportRef}>
          <div className={`${styles.container} ${styles.container__thumb}`}>
            this is thumbnail slides
          </div>
        </div>
      </div>
    </ThumbnailsCarouselContext.Provider>
  );
};

export default ThumbnailsCarousel;
