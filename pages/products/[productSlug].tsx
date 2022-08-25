import { useRouter } from 'next/router';
import ProductDetails from '../../components/product-details';
import ProductDescription from '../../components/product-description';
import ProductImages from '../../components/product-images';
import useClientRect from '../../utils/clientRect-observer';
import { useContext } from 'react';
import { ScrollContext } from '../../utils/scroll-observer';

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

  const { scrollY } = useContext(ScrollContext);
  const { rect: rectF, ref: refF } = useClientRect(['']);
  return (
    <div className="w-full h-full px-8 flex relative" ref={refF}>
      <div className="shrink w-[30%] h-[calc(100vh-5.5rem)] flex items-center sticky top-[calc(5rem+0.5rem)]">
        <ProductDetails
          name="APLIFY LEGGING"
          intro="Women's Seamless Scrunch Legging"
          color="Scarlet"
          price="$72.00"
        />
      </div>

      <div className="shrink-[2] w-full mx-24 mt-5 sticky top-0">
        <ProductImages images={imgs} />
      </div>

      <div className="shrink w-[30%]">
        <p className="w-full">This is color list</p>
      </div>

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
