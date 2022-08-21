import React, { useCallback, useState } from 'react';

interface CartValue {
  cartMode: 'open' | 'close';
  handleMode: VoidFunction;
}

export const CartContext = React.createContext<CartValue>({
  cartMode: 'close',
  handleMode: () => { }
});

interface Props {
  children: React.ReactNode;
}

const CartController = ({ children }: Props) => {
  const [cartMode, setCartMode] = useState<'open' | 'close'>('close');

  const handleMode = useCallback(() => {
    if (cartMode === 'open') {
      setCartMode('close');
    } else {
      setCartMode('open');
    }
  }, [cartMode]);

  return (
    <CartContext.Provider value={{ cartMode, handleMode }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartController;
