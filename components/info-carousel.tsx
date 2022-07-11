import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay, { AutoplayOptionsType } from 'embla-carousel-autoplay';
import React from 'react';

type PropType = {
  options?: EmblaOptionsType;
  autoplay?: AutoplayOptionsType;
  slides: React.ReactNode[];
};

const InforCarousel = (props: PropType) => {
  const { options, autoplay, slides } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplay)]);
  return (
    <div className="overflow-hidden h-full w-full" ref={emblaRef}>
      <div className="flex h-full items-center">
        {slides.map((slide, index) => (
          <div
            className="relative shrink-0 grow-0 basis-full text-xs font-bold text-secondary_70 dark:text-primary_50 sm:text-center cursor-pointer"
            key={index}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InforCarousel;
