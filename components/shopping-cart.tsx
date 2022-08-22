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
      } fixed top-0 w-full h-screen flex items-center transition-all cursor-pointer`}
    >
      <div
        className="w-full h-screen fixed top-0 left-0 backdrop-blur-lg bg-primary_60 dark:bg-secondary_60 z-10"
        onClick={handleMode}
      ></div>
      <div
        className={`grow flex h-fit items-center relative z-20 ${
          cartMode === 'close'
            ? 'translate-x-[-100%] opacity-0'
            : 'translate-x-0 opacity-100'
        } transition-all duration-300`}
      >
        <Trending />
      </div>
      <div
        className={`w-[26rem] h-[87%] relative z-20 ${
          cartMode === 'close'
            ? 'translate-x-full opacity-0'
            : 'translate-x-0 opacity-100'
        } transition-all duration-300`}
      >
        <CartMenu cartItems={[]} />
      </div>
    </div>
  );
};

export default ShoppingCart;
