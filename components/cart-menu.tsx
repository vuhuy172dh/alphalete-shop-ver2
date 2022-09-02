import Link from 'next/link';

interface Props {
  cartItems: string[];
}

const CartMenu = ({ cartItems }: Props) => {
  return (
    <div className="w-full h-full flex items-center bg-primary dark:bg-secondary border border-secondary_20 dark:border-primary_20 rounded-l-2xl cursor-default">
      {cartItems.length !== 0 ? (
        <div>this is cart item</div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3">
          <p className="leading-none text-[1.2rem] font-bold">
            GIVE YOUR BAG SOME LOVE
          </p>
          <Link href="/">
            <a className="p-3 border-[2px] border-secondary_30 dark:border-primary_30 rounded-lg hover:border-secondary_50 dark:hover:border-primary_50 hover:bg-secondary_30 dark:hover:bg-primary_30">
              <p className="leading-none text-[0.9rem] font-bold">
                WOMEN&apos;S BEST SELLERS
              </p>
            </a>
          </Link>
          <Link href="/">
            <a className="p-3 border-[2px] border-secondary_30 dark:border-primary_30 rounded-lg hover:border-secondary_50 dark:hover:border-primary_50 hover:bg-secondary_30 dark:hover:bg-primary_30">
              <p className="leading-none text-[0.9rem] font-bold">
                MEN&apos;S BEST SELLERS
              </p>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartMenu;
