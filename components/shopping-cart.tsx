import { useContext } from 'react';
import { CartContext } from '../utils/cart-controller';

const ShoppingCart = () => {
  const { cartMode } = useContext(CartContext);
  return (
    <div
      className={`${
        cartMode === 'open' ? 'flex' : 'hidden'
      } fixed top-0 z-50 w-screen h-screen`}
    >
      <div></div>
    </div>
  );
};

export default ShoppingCart;
