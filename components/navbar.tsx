import React from 'react';
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
              <button className="h-full flex items-center text-[0.8rem] px-2 font-bold relative after:block after:h-[1px] after:w-full after:bg-secondary dark:after:bg-primary after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:scale-y-100 after:origin-[100%_100%] after:transition-[transform] after:duration-[600ms] after:ease-linear hover:after:scale-x-100 hover:after:scale-y-100 hover:after:origin-[0%_100%]">
                Info
              </button>
              <LinkBtn href="/account/login">Login</LinkBtn>
            </div>
          </div>
          <hr className="w-[calc(100%-3rem)] border-t-secondary_30 dark:border-t-primary_30 mx-auto" />
          <div id="nav-bottom" className="h-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
