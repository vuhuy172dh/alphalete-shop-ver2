import { useContext } from 'react';
import { NavbarContext } from '../utils/navbar-controller';
import LinkBtn from './link-btn';

const NavDrawer = () => {
  const { mode, handleMode } = useContext(NavbarContext);
  return (
    <div
      className={`${mode === 'closeDrawer' ? 'opacity-0 invisible' : 'opacity-100 visible'
        } fixed top-0 left-0 w-full h-screen backdrop-blur-lg z-20 transition-all duration-500`}
      onClick={handleMode}
    >
      <div
        className={`${mode === 'closeDrawer' ? 'translate-y-full' : 'translate-y-0'
          } fixed bottom-0 left-0 w-full h-[90vh] flex-col transition-transform duration-500 bg-primary_80 border-t rounded-t-3xl border-primary_80 dark:bg-secondary_80 dark:border-secondary_80`}
      >
        <div className="sticky w-full flex justify-center">
          <div className="w-fit">
            <LinkBtn href="/collection/men">
              <p className="font-bold px-2 text-[1.5rem]">MEN</p>
            </LinkBtn>
          </div>
          <div className="w-fit">
            <LinkBtn href="/collection/women">
              <p className="font-bold px-2 text-[1.5rem]">WOMEN</p>
            </LinkBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
