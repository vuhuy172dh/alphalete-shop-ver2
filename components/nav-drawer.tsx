import React, { useState, useContext } from 'react';
import { NavbarContext } from '../utils/navbar-controller';
import ButtonSlideEffect from './button-slide-effect';
import NavdrawerFooter from './navdrawer-footer';
import NavdrawerMenu from './navdrawer-menu';

const NavDrawer = () => {
  const { mode, handleMode } = useContext(NavbarContext);
  const [click, setClick] = useState(true);
  const handleMenClick = () => {
    setClick(true);
  };
  const handleWomenClick = () => {
    setClick(false);
  };
  return (
    <div
      className={`${
        mode === 'closeDrawer' ? 'translate-y-full' : 'translate-y-0'
      } w-full h-screen fixed bottom-0 left-0 z-[25] flex justify-center items-end transition-transform duration-500`}
    >
      <div
        className={`${
          mode === 'closeDrawer' ? 'invisible opacity-0' : 'visible opacity-100'
        } w-screen h-screen fixed top-0 left-0 backdrop-blur-sm z-20 delay-500 transition-all`}
        onClick={handleMode}
      ></div>
      <div className="w-full max-w-[700px] h-[90vh] flex-col items-center bg-primary_80 dark:bg-secondary_80 relative z-30 border-t border-secondary_20 dark:border-primary_20 rounded-t-3xl backdrop-saturate-[1.8] backdrop-blur-[3px] overflow-auto scroll-smooth">
        <div className={`w-full flex justify-center pt-2 sticky top-0 z-30`}>
          <ButtonSlideEffect onClick={handleMenClick}>
            <p className="font-bold text-[1.5rem] leading-none px-1">MEN</p>
          </ButtonSlideEffect>
          <ButtonSlideEffect onClick={handleWomenClick}>
            <p className="font-bold text-[1.5rem] leading-none px-1">WOMEN</p>
          </ButtonSlideEffect>
        </div>
        <hr className="w-[calc(100%-3rem)] my-2 mx-auto border-t border-t-secondary_40 dark:border-t-primary_40" />
        <div className="block w-full">
          {click === true ? (
            <NavdrawerMenu
              title_1="Bottoms"
              links_1={['Shorts', 'Joggers', 'Boardshorts', 'Base Layers']}
              title_2="Tops"
              links_2={[
                'Stringers',
                'Tank tops',
                'Shorts Sleeves',
                'Jackets & Hoodies'
              ]}
              posters={[
                'https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_85.jpg?crop=center&height=300&v=1648056105&width=250',
                'https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_08.jpg?crop=center&height=300&v=1651867703&width=250'
              ]}
            />
          ) : (
            <NavdrawerMenu
              title_1="Tops"
              links_1={[
                'Sports Bras',
                'Tank Tops',
                'Shirts & Crops',
                'Long Sleeves',
                'Jackets & Hoodies'
              ]}
              title_2="Bottoms"
              links_2={[
                'Shorts',
                'Leggings',
                'Joggers',
                'Dresses & Skirts',
                'Underwear'
              ]}
              posters={[
                'https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyJune_13.jpg?crop=center&height=300&v=1654936386&width=250',
                'https://cdn.shopify.com/s/files/1/0667/0133/files/Amplify_06.jpg?crop=center&height=300&v=1653147420&width=250'
              ]}
            />
          )}
        </div>
        <hr className="w-[calc(100%-3rem)] my-2 mx-auto border-t border-t-secondary_40 dark:border-t-primary_40" />
        <NavdrawerFooter />
      </div>
    </div>
  );
};

export default NavDrawer;
