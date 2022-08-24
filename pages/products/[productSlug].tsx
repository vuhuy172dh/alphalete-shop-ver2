import { useRouter } from 'next/router';
import ProductDetails from '../../components/product-details';
import ProductImages from '../../components/product-images';

const Product = () => {
  const router = useRouter();
  // this productSlug will be used for calling API to fetch data from database (future)
  const { productSlug } = router.query;

  return (
    <div className="w-full h-full px-8 flex relative">
      <div className="shrink w-[30%] h-[calc(100vh-5.5rem)] flex items-center sticky top-[calc(5rem+0.5rem)]">
        <ProductDetails
          name="APLIFY LEGGING"
          intro="Women's Seamless Scrunch Legging"
          color="Scarlet"
          price="$72.00"
        />
      </div>

      <div className="shrink-[2] w-full mx-24 mt-5 sticky top-0">
        <ProductImages
          images={[
            'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface114_1000x.jpg?v=1658854613',
            'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface112_1000x.jpg?v=1658854642',
            'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface115_1000x.jpg?v=1658854644',
            'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface113_1000x.jpg?v=1658854646',
            'https://cdn.shopify.com/s/files/1/0667/0133/products/SeamlessandSurface111_1_1000x.jpg?v=1658859485'
          ]}
        />
      </div>
      <div className="shrink w-[30%]">
        <p className="w-full">This is color list</p>
      </div>

      <div className="min-w-[50rem] fixed bottom-0 left-1/2 translate-x-[-50%] z-10 backdrop-blur-lg bg-secondary_70 border border-secondary_20 dark:border-primary_20 rounded-t-3xl">
        <div className="h-12 flex">
          <div className="flex-1 pl-8">
            <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
              <span>DESCRIPTION</span>
            </div>
          </div>

          <div className="flex-1 pl-8">
            <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
              <span>DESCRIPTION</span>
            </div>
          </div>

          <div className="flex-1 pl-8">
            <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
              <span>DESCRIPTION</span>
            </div>
          </div>

          <div className="flex-1 pl-8">
            <div className="relative flex h-full min-w-[8rem] cursor-pointer items-center justify-center whitespace-nowrap text-center font-[500]">
              <span>DESCRIPTION</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
