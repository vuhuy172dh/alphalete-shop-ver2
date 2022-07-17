import TrendingCarousel from '../utils/trending-carousel';
import LinkBtn from './link-btn';
import TrendingItem from './trending-item';

const Trending = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full px-24 flex items-center">
        <div className="flex flex-col w-full h-full gap-2">
          <p className="leading-none">Amplify Heaven</p>
          <div className="block w-fit">
            <LinkBtn href="/">
              <p className="leading-none font-bold text-[1.5rem]">
                TRENDING NOW
              </p>
            </LinkBtn>
          </div>
        </div>
        <div className="w-full h-full flex justify-end">
          <button className="flex w-fit h-full py-4 px-4 bg-secondary_50 dark:bg-primary_50 rounded-2xl font-bold text-[1rem] leading-none transition-all hover:bg-secondary_70 dark:hover:bg-primary_70">
            SHOP SEAMLESS
          </button>
        </div>
      </div>
      <div className="w-full h-full my-4 overflow-hidde relative">
        <TrendingCarousel>
          <TrendingItem index={0}>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_400x.jpg?v=1654661505"
              alt="item"
            />
          </TrendingItem>
          <TrendingItem index={1}>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_400x.jpg?v=1654661505"
              alt="item"
            />
          </TrendingItem>
          <TrendingItem index={2}>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_400x.jpg?v=1654661505"
              alt="item"
            />
          </TrendingItem>
          <TrendingItem index={3}>
            <img
              src="https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_400x.jpg?v=1654661505"
              alt="item"
            />
          </TrendingItem>
        </TrendingCarousel>
      </div>
    </div>
  );
};

export default Trending;
