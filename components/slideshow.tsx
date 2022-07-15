import Carousel from '../utils/carousel';
import CarouselItem from './carousel-item';
import SlideshowContext from './slideshow-context';

const SlideShow = () => {
  return (
    <section className="px-20 py-14">
      <div className="block max-w-[1234px] mx-auto relative w-full rounded-[3rem] overflow-hidden shadow-lg shadow-secondary_30 dark:shadow-primary_30 transition-all hover:scale-[1.01]">
        <Carousel>
          <CarouselItem index={0}>
            <SlideshowContext
              title="SUMMERTIME"
              subtitle="Now Available - Summer 2022 Collection"
              href1="/collects/men"
              linkName1="SHOP MEN"
              href2="/collects/women"
              linkName2="SHOP WOMEN"
              position="start"
            >
              <video
                src="https://cdn.shopify.com/s/files/1/0667/0133/files/cg-motivational-land.mp4?v=1654931634"
                autoPlay
                loop
                muted
                poster="//cdn.shopify.com/s/files/1/0667/0133/files/E527B7F5-53F8-4941-8F3A-AC8079FD6ECC_1400x.jpg?v=1655155189"
                playsInline
              />
            </SlideshowContext>
          </CarouselItem>
          <CarouselItem index={1}>
            <SlideshowContext
              title="SUMMERTIME"
              subtitle="Now Available - Summer 2022 Collection"
              href1="/collects/men"
              linkName1="SHOP MEN"
              href2="/collects/women"
              linkName2="SHOP WOMEN"
              position="center"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0667/0133/files/pride-btob-land.jpg?crop=center&v=1654081765&width=1400"
                alt="Our favorites"
              />
            </SlideshowContext>
          </CarouselItem>
          <CarouselItem index={2}>
            <SlideshowContext
              title="SUMMERTIME"
              subtitle="Now Available - Summer 2022 Collection"
              href1="/collects/men"
              linkName1="SHOP MEN"
              href2="/collects/women"
              linkName2="SHOP WOMEN"
              position="end"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyJune_01-land.jpg?crop=center&v=1654927397&width=1400"
                alt="Our favorites"
              />
            </SlideshowContext>
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
};

export default SlideShow;
