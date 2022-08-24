import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();
  const { productSlug } = router.query;

  return (
    <div>
      <p>product: {productSlug}</p>
    </div>
  );
};

export default Product;
