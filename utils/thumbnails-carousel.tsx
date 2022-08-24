import React, { useCallback, useState } from 'react';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import styles from '../styles/thumbnails-carousel.module.css';
import ThumbnailsItem, {
  ThumbnailsSubItem
} from '../components/thumbnails-item';
import QuickAdd from '../components/quick-add';

interface ContextProps {
  embla: EmblaCarouselType | undefined;
}

export const ThumbnailsCarouselContext = React.createContext<ContextProps>({
  embla: undefined
});

interface Props {
  sources: string[];
  names: string[];
  product_name: string;
  product_color: string;
  product_price: string;
}

const ThumbnailsCarousel = ({
  sources,
  names,
  product_name,
  product_color,
  product_price
}: Props) => {
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

  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = useCallback(() => {
    setMouseEnter(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setMouseEnter(false);
  }, []);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  return (
    <ThumbnailsCarouselContext.Provider value={{ embla: emblaThumbsApi }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.embla}>
          <div className={styles.viewport} ref={mainViewportRef}>
            <div className={`${styles.container}`}>
              {sources.map((src, index) => (
                <ThumbnailsItem src={src} alt={names[index]} key={index} productSlug={names[index]}/>
              ))}
            </div>
            <QuickAdd sizes={['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']} mouseEnter={mouseEnter}/>
          </div>
        </div>

        <div className={styles.bottom_container}>
          <div
            className={`border border-secondary_50 dark:border-primary_50 rounded-lg ${styles.embla__thumb
              } ${mouseEnter ? 'mouse_enter' : ''}`}
          >
            <div className={styles.viewport__thumb} ref={thumbViewportRef}>
              <div className={`${styles.container__thumb} `}>
                {sources.map((src, index) => (
                  <ThumbnailsSubItem
                    src={src}
                    alt={names[index]}
                    onClick={() => onThumbClick(index)}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className={`${styles.product_content} ${mouseEnter ? 'mouse_enter' : ''
              }`}
          >
            <strong className={styles.product_name}>{product_name}</strong>
            <p className={styles.product_color}>{product_color}</p>
            <p className={styles.product_price}>{product_price}</p>
          </div>
        </div>
      </div>
    </ThumbnailsCarouselContext.Provider>
  );
};

export default ThumbnailsCarousel;
