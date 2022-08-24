import { useRouter } from 'next/router';
import ProductDetails from '../../components/product-details';

const Product = () => {
  const router = useRouter();
  // this productSlug will be used for calling API to fetch data from database (future)
  const { productSlug } = router.query;

  return (
    <div className="w-full h-screen pl-8 flex">
      <div className="grow flex items-center">
        <ProductDetails
          name="APLIFY LEGGING"
          intro="Women's Seamless Scrunch Legging"
          color="Scarlet"
          price="$72.00"
        />
      </div>
      <div className="grow-[3]"></div>
      <div className="grow">
        <ProductDetails
          name="APLIFY LEGGING"
          intro="Women's Seamless Scrunch Legging"
          color="Scarlet"
          price="$72.00"
        />
      </div>
    </div>
  );
};

export default Product;
