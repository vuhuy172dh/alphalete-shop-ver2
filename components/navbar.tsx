import Link from 'next/link';
import React from 'react';
import ButtonSlideEffect from './button-slide-effect';
import InforCarousel from './info-carousel';
import LinkBtn from './link-btn';

const Navbar = () => {
  return (
    <section>
      <div className="block sm:px-0 md:px-4 lg:px-12 max-h-[1024px]">
        <div className="flex flex-col items-center rounded-b-[1.5rem] sm:rounded-b-2xl border border-secondary_20 dark:border-primary_20 bg-primary_80 dark:bg-secondary_80">
          <div id="nav-top" className="h-8 w-full flex px-6">
            <div className="block w-full mr-auto">
              <InforCarousel
                options={{ loop: true }}
                autoplay={{ delay: 5000, stopOnInteraction: false }}
                slides={[
                  'Free Domestic Shipping Over $150 and 30 Day Returns',
                  "Shop Men's New Arrivals",
                  "Shop Women's New Arrivals"
                ]}
              />
            </div>
            <div className="flex sm:hidden items-center">
              <ButtonSlideEffect slideEffectDuration="600ms">
                <p className="opacity-70 text-[0.8rem] font-bold">Info</p>
              </ButtonSlideEffect>
              <LinkBtn href="/account/login" slideEffectDuration="600ms">
                <p className="font-bold text-[0.8rem] opacity-70">Login</p>
              </LinkBtn>
            </div>
          </div>
          <hr className="w-[calc(100%-3rem)] border-t-secondary_30 dark:border-t-primary_30 mx-auto" />
          <div id="nav-bottom" className="w-full h-12 flex items-center px-6">
            <Link href="/">
              <div className="block w-full mr-auto cursor-pointer">
                <p className="font-bold text-[1.2rem]">ALPHALETE</p>
              </div>
            </Link>
            <div className="flex w-full h-full mr-auto sm:hidden">
              <ButtonSlideEffect slideEffectDuration="400ms">
                <p className="font-bold text-[1rem] opacity-70">MEN</p>
              </ButtonSlideEffect>
              <ButtonSlideEffect slideEffectDuration="400ms">
                <p className="font-bold text-[1rem] opacity-70">WOMEN</p>
              </ButtonSlideEffect>
            </div>
            <div className="flex">
              <button>search</button>
              <button>card</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
