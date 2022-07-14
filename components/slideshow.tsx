import Carousel from '../utils/carousel';
import CarouselItem from './carousel-item';

const SlideShow = () => {
  return (
    <section className="px-20 py-14">
      <div className="block max-w-[1234px] mx-auto relative w-full">
        <Carousel>
          <CarouselItem index={0}>
            <video
              src="https://cdn.shopify.com/s/files/1/0667/0133/files/cg-motivational-land.mp4?v=1654931634"
              autoPlay
              loop
              muted
              poster="//cdn.shopify.com/s/files/1/0667/0133/files/E527B7F5-53F8-4941-8F3A-AC8079FD6ECC_1400x.jpg?v=1655155189"
              playsInline
            />
          </CarouselItem>
          <CarouselItem index={1}>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/files/pride-btob-land.jpg?crop=center&v=1654081765&width=1400"
              alt="Our favorites"
            />
          </CarouselItem>
          <CarouselItem index={2}>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyJune_01-land.jpg?crop=center&v=1654927397&width=1400"
              alt="Our favorites"
            />
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
};

export default SlideShow;
