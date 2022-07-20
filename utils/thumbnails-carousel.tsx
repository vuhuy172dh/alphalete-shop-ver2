import React, { useCallback } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import styles from '../styles/thumbnails-carousel.module.css';
import ThumbnailsItem, {
  ThumbnailsSubItem
} from '../components/thumbnails-item';

interface ContextProps {
  embla: EmblaCarouselType | undefined;
}

export const ThumbnailsCarouselContext = React.createContext<ContextProps>({
  embla: undefined
});

interface Props {
  sources: string[];
  names: string[];
}

const ThumbnailsCarousel = ({ sources, names }: Props) => {
  const [mainViewportRef, emblaMainApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start'
    },
    [ClassNames()]
  );

  const [thumbViewportRef, emblaThumbsApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start'
    },
    [ClassNames()]
  );

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  return (
    <ThumbnailsCarouselContext.Provider value={{ embla: emblaThumbsApi }}>
      <div className={styles.embla}>
        <div className={styles.viewport} ref={mainViewportRef}>
          <div className={styles.container}>
            {sources.map((src, index) => (
              <ThumbnailsItem src={src} alt={names[index]} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.embla__thumb}>
        <div className={styles.viewport} ref={thumbViewportRef}>
          <div className={styles.container__thumb}>
            {sources.map((src, index) => (
              <ThumbnailsSubItem
                src={src}
                alt={names[index]}
                onClick={() => onThumbClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </ThumbnailsCarouselContext.Provider>
  );
};

export default ThumbnailsCarousel;
