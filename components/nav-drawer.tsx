import { useContext } from 'react';
import { NavbarContext } from '../utils/navbar-controller';

const NavDrawer = () => {
  const { mode, handleMode } = useContext(NavbarContext);
  return (
    <div className="sm:block md:block lg:hidden">
      <div
        className={`${mode === 'closeDrawer' ? 'invisible' : 'visible'
          } fixed left-0 top-0 z-30 bg-red-900 w-full h-screen`}
        onClick={handleMode}
      ></div>
      <div></div>
    </div>
  );
};

export default NavDrawer;
