import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../utils/search-controller';
import ThumbnailsCarousel from '../utils/thumbnails-carousel';
import LinkBtn from './link-btn';

const Search = () => {
  const { searchMode, handleSearchMode } = useContext(SearchContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  else {
    return (
      <div
        className={`${searchMode === 'open'
          ? 'visible z-50 opacity-100'
          : 'invisible z-[-1] opacity-0'
          } w-full h-screen fixed top-0 cursor-pointer bg-primary_60 dark:bg-secondary_60 flex justify-center items-end`}
      >
        <div
          className="w-full h-full fixed top-0 backdrop-blur-md z-10"
          onClick={handleSearchMode}
        ></div>

        <div className="w-[90vw] h-[85vh] pt-8 relative bg-primary dark:bg-secondary z-20 border border-secondary_20 dark:border-primary_20 rounded-t-2xl flex flex-col items-center">
          <div className="w-full px-6">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 bg-transparent text-[1rem] text-secondary_70 dark:text-primary_70 !outline-none focus:text-secondary dark:focus:text-primary placeholder:text-secondary_50 dark:placeholder:text-primary_50"
            />
            <hr className="w-full border-t border-t-secondary_30 dark:border-t-primary_30" />
          </div>

          <div className="w-full px-8 flex flex-col justify-start overflow-auto scroll-smooth">
            <div className="w-full py-8 flex flex-col justify-start">
              <p className="leading-none text-[1rem] font-bold ">
                POPULAR SEARCHES
              </p>
              <div className="w-fit my-1">
                <LinkBtn href="/">
                  <p className="leading-none text-[0.8rem]">Amplify</p>
                </LinkBtn>
              </div>
              <div className="w-fit my-1">
                <LinkBtn href="/">
                  <p className="leading-none text-[0.8rem]">Surface</p>
                </LinkBtn>
              </div>
              <div className="w-fit my-1">
                <LinkBtn href="/">
                  <p className="leading-none text-[0.8rem]">Performance</p>
                </LinkBtn>
              </div>
              <div className="w-fit my-1">
                <LinkBtn href="/">
                  <p className="leading-none text-[0.8rem]">Ozone</p>
                </LinkBtn>
              </div>
              <div className="w-fit my-1">
                <LinkBtn href="/">
                  <p className="leading-none text-[0.8rem]">Shorts</p>
                </LinkBtn>
              </div>
            </div>
            <hr className="w-full border-t border-t-secondary_30 dark:border-t-primary_30" />
            <div className="w-full py-8 flex flex-wrap ">
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
              <div className="grow shrink-0 basis-1/5 m-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Search;
