import { useContext } from 'react';
import { CartContext } from '../utils/cart-controller';
import CartMenu from './cart-menu';
import Trending from './trending';

const ShoppingCart = () => {
  const { cartMode, handleMode } = useContext(CartContext);
  return (
    <div
      className={`${
        cartMode === 'open'
          ? 'z-50 visible opacity-100'
          : 'z-[-1] invisible opacity-0'
      } fixed top-0 w-full h-screen flex backdrop-blur-lg transition-all bg-primary_60 dark:bg-secondary_60 cursor-pointer`}
    >
      <div className="grow flex items-center relative" onClick={handleMode}>
        <div>
          <Trending />
        </div>
      </div>
      <div className="w-[26rem] relative">
        <CartMenu cartItems={[]} />
      </div>
    </div>
  );
};

export default ShoppingCart;
