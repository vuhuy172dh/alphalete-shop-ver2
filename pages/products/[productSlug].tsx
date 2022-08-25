import { useRouter } from 'next/router';
import ProductDetails from '../../components/product-details';
import ProductDescription from '../../components/product-description';
import ProductImages from '../../components/product-images';
import useClientRect from '../../utils/clientRect-observer';
import { useContext } from 'react';
import { ScrollContext } from '../../utils/scroll-observer';
import ProductColors from '../../components/product-colors';

const Product = () => {
  const router = useRouter();
  // this productSlug will be used for calling API to fetch data from database (future)
  const { productSlug } = router.query;

  const imgs = [
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface114_1000x.jpg?v=1658854613',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface112_1000x.jpg?v=1658854642',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface115_1000x.jpg?v=1658854644',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface113_1000x.jpg?v=1658854646',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface111_1_1000x.jpg?v=1658859485'
  ];

  const colors = [
    'Hazelnut',
    'Blossom',
    'Scarlet',
    'Chocolate',
    'Mandarin',
    'Evergreen',
    'Pink',
    'Mocha',
    'Black',
    'Titanium',
    'Misty Lilac',
    'Washed Denim',
    'Whale Blue',
    'Formula Red',
    'Pier Blue',
    'Storm Grey',
    'Dusty Green',
    'French Blue',
    'Passive Purple',
    'Medium Grey'
  ];

  const color_imgs = [
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface124_150x.jpg?v=1658854772',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface50_150x.jpg?v=1658853141',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3048_150x.jpg?v=1651809632',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay3047_150x.jpg?v=1651809608',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A4567_150x.jpg?v=1639110765',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310018_150x.jpg?v=1654661048',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName2_db99058f-ac0d-45a4-bc47-862ca8f86c33_150x.jpg?v=1654879134',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310073_089ad093-1cd0-46a0-8169-a76fe8333ef9_150x.jpg?v=1658335180',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310083_150x.jpg?v=1654660956',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/EmptyName2_150x.jpg?v=1654878466',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface114_150x.jpg?v=1658854613',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface79_150x.jpg?v=1658853851',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface23_150x.jpg?v=1658852846',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310181_150x.jpg?v=1654660835',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310073_a4e013dd-c315-40d4-af70-847f0a3ba01b_150x.jpg?v=1654662548',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyMay2926_150x.jpg?v=1651809670',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A4547_150x.jpg?v=1639110732',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyRestockMay310142_150x.jpg?v=1654661073',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/4U8A4507_150x.jpg?v=1639110837',
    'https://cdn.shopify.com/s/files/1/0667/0133/products/AmplifyLeggings_39_150x.jpg?v=1633130403'
  ];

  const { scrollY } = useContext(ScrollContext);
  const { rect: rectF, ref: refF } = useClientRect(['']);
  return (
    <div className="w-full h-full px-8 flex relative" ref={refF}>
      {/*this is a section for product details on the left side of the screen*/}
      <div className="shrink w-[30%] h-[calc(100vh-5.5rem)] flex items-center sticky top-[calc(5rem+0.5rem)]">
        <ProductDetails
          name="APLIFY LEGGING"
          intro="Women's Seamless Scrunch Legging"
          color="Scarlet"
          price="$72.00"
        />
      </div>

      {/*this is a section for product's images on the middle side of the screen*/}
      <div className="shrink-[2] w-full mx-24 mt-5 sticky top-0">
        <ProductImages images={imgs} />
      </div>

      {/*this is a section for color list on the right side of the screen*/}
      <div className="shrink w-[30%] h-[calc(100vh-5.5rem)] flex items-center sticky top-[calc(5rem+0.5rem)]">
        <ProductColors colors={colors} imgs={color_imgs} />
      </div>

      {/*this is a section for product's description on the bottom of the screen*/}
      <div
        className={`min-w-[40rem] fixed bottom-0 left-1/2 translate-x-[-50%] z-10 backdrop-blur-lg bg-primary_70 dark:bg-secondary_70 border border-secondary_20 dark:border-primary_20 rounded-t-3xl ${
          rectF?.height
            ? scrollY > 110 + (rectF.height * (imgs.length - 1)) / imgs.length
              ? 'translate-y-full'
              : 'translate-y-0'
            : ''
        }`}
      >
        <ProductDescription />
      </div>
    </div>
  );
};

export default Product;
