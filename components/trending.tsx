import ThumbnailsCarousel from '../utils/thumbnails-carousel';
import TrendingCarousel from '../utils/trending-carousel';
import LinkBtn from './link-btn';
import TrendingItem from './trending-item';

const Trending = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full px-[7%] flex items-center">
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
      <div className="w-full h-full my-4 overflow-hidden  relative">
        <TrendingCarousel>
          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                '//cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                '//cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                '//cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                '//cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>

          <TrendingItem index={0}>
            <ThumbnailsCarousel
              sources={[
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310133_80x.jpg?v=1654661505',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName6_80x.jpg',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079_80x.jpg?v=1654662422',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310027_80x.jpg?v=1654661653',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310079choc_80x.jpg?v=1654662640',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310172_80x.jpg?v=1654661674',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay314312_027f2867-ae60-4b31-8e67-2d761bb3d80f_80x.jpg?v=1654879164',
                'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3060_80x.jpg?v=1651809749'
              ]}
              names={['image', 'image', 'image', 'image']}
              product_name="Ozone Short"
              product_color="Lavender"
              product_price="$50.00"
            />
          </TrendingItem>
        </TrendingCarousel>
      </div>
    </div>
  );
};

export default Trending;
