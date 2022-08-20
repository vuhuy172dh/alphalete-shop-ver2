import Link from 'next/link';
import React, { useCallback, useContext, useState } from 'react';
import useClientRect from '../utils/clientRect-observer';
import { ScrollContext } from '../utils/scroll-observer';
import ButtonSlideEffect from './button-slide-effect';
import InforCarousel from './info-carousel';
import LinkBtn from './link-btn';
import {
  faSearch,
  faBriefcase,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavbarMenu from './navbar-menu';
import { NavbarContext } from '../utils/navbar-controller';

const Navbar = () => {
  const [isMenHovered, setIsMenHovered] = useState<boolean>(false);
  const [isWomenHovered, setIsWomenHovered] = useState<boolean>(false);
  const { rect: rectMen, ref: refMen } = useClientRect([isMenHovered]);
  const { rect: rectWomen, ref: refWomen } = useClientRect([isWomenHovered]);
  const { scrollY } = useContext(ScrollContext);

  const { mode, handleMode } = useContext(NavbarContext);
  return (
    <section className="mb-[calc(5rem+0.5rem)] relative z-20">
      <div
        className={`w-screen h-screen fixed top-0 z-1 backdrop-blur-sm transition-all duration-500 ${rectMen?.height === 0 && rectWomen?.height === 0
            ? 'invisible opacity-0'
            : 'visible opacity-100'
          }`}
      ></div>
      <div
        className={`block w-full sm:px-0 md:px-4 lg:px-12 fixed top-0 ${scrollY !== 0 ? 'top-[-2rem]' : 'top-0'
          } z-2 transition-all`}
      >
        <div className="w-full max-w-[1234px] flex flex-col items-center mx-auto rounded-b-[1.5rem] sm:rounded-b-2xl border border-secondary_20 dark:border-primary_20 bg-primary_80 dark:bg-secondary_80 backdrop-blur-lg">
          <div id="nav-top" className="h-8 w-full flex px-6">
            <div className="block w-full mr-auto">
              <InforCarousel
                options={{ loop: true, align: 'center' }}
                autoplay={{ delay: 5000, stopOnInteraction: false }}
                slides={[
                  'Free Domestic Shipping Over $150 and 30 Day Returns',
                  "Shop Men's New Arrivals",
                  "Shop Women's New Arrivals"
                ]}
              />
            </div>
            <div className="flex sm:hidden items-center">
              <ButtonSlideEffect styles="relative group">
                <p className="h-full flex items-center text-[0.8rem] font-bold opacity-70 px-2 hover:opacity-100">
                  Info
                </p>
                <div className="hidden w-52 mt-[1px] p-6 flex-col items-start absolute top-8 right-0 bg-primary dark:bg-secondary rounded-lg border border-secondary_40 dark:border-primary_40 gap-2 z-10 group-hover:flex cursor-default">
                  <div className="h-4">
                    <LinkBtn href="/">
                      <p className="text-[0.7rem] leading-none">Help Center</p>
                    </LinkBtn>
                  </div>
                  <div className="h-4">
                    <LinkBtn href="/">
                      <p className="text-[0.7rem] leading-none">Returns</p>
                    </LinkBtn>
                  </div>
                  <div className="h-4">
                    <LinkBtn href="/">
                      <p className="text-[0.7rem] leading-none">About Us</p>
                    </LinkBtn>
                  </div>
                  <div className="h-4">
                    <LinkBtn href="/">
                      <p className="text-[0.7rem] leading-none">Carreers</p>
                    </LinkBtn>
                  </div>
                  <div className="h-4">
                    <LinkBtn href="/">
                      <p className="text-[0.7rem] leading-none">
                        Privacy Policy
                      </p>
                    </LinkBtn>
                  </div>
                </div>
              </ButtonSlideEffect>
              <LinkBtn href="/login">
                <p className="h-full flex items-center px-[0.5rem] font-bold text-[0.8rem] opacity-70 hover:opacity-100">
                  Login
                </p>
              </LinkBtn>
            </div>
          </div>
          <hr className="w-[calc(100%-3rem)] border-t-secondary_30 dark:border-t-primary_30 mx-auto" />
          <div
            id="nav-bottom"
            className="w-full h-12 flex items-center px-6 relative"
          >
            <Link href="/">
              <div className="block w-full mr-auto cursor-pointer">
                <p className="font-bold text-[1.2rem]">ALPHALETE</p>
              </div>
            </Link>
            <div className="flex w-full h-full mr-auto sm:hidden">
              <div
                className="group"
                onMouseEnter={() => {
                  setIsMenHovered(true);
                }}
                onMouseLeave={() => {
                  setIsMenHovered(false);
                }}
              >
                <LinkBtn href="/men">
                  <p className="h-full flex items-center px-2 font-bold text-[1rem] opacity-70 hover:opacity-100">
                    MEN
                  </p>
                </LinkBtn>
                <div
                  className="absolute top-[3rem] left-0 w-full h-0 invisible opacity-0 translate-y-[3rem] transition-all duration-300 delay-[0ms] group-hover:translate-y-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 group-hover:delay-150"
                  ref={refMen}
                >
                  <NavbarMenu
                    posters_default={[
                      'https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_85.jpg?crop=center&height=300&v=1648056105&width=250',
                      'https://cdn.shopify.com/s/files/1/0667/0133/files/Elements_08.jpg?crop=center&height=300&v=1651867703&width=250'
                    ]}
                    title_1="Tops"
                    title_2="Bottoms"
                    links_1={[
                      'Stringers',
                      'Tank Tops',
                      'Short Sleeves',
                      'Jackets & Hoodies'
                    ]}
                    links_2={[
                      'Shorts',
                      'Joggers',
                      'Boardshorts',
                      'Base layers'
                    ]}
                    posters_1={[
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/m_stringer_tank.jpg?crop=center&v=1655151099&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/m_tank.jpg?crop=center&amp;v=1655150864&amp;width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/m_sweater.jpg?crop=center&amp;v=1655151017&amp;width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/m_hoodies.jpg?crop=center&amp;v=1655150884&amp;width=520'
                    ]}
                    posters_2={[
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/m_short_3.jpg?crop=center&amp;v=1655150936&amp;width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/m_jogger.jpg?crop=center&amp;v=1655153410&amp;width=520'
                    ]}
                  />
                </div>
              </div>
              <div
                className="group"
                onMouseEnter={() => setIsWomenHovered(true)}
                onMouseLeave={() => setIsWomenHovered(false)}
              >
                <LinkBtn href="/women">
                  <p className="h-full flex items-center px-2 font-bold text-[1rem] opacity-70 hover:opacity-100">
                    WOMEN
                  </p>
                </LinkBtn>
                <div
                  className="absolute top-[3rem] left-0 w-full h-0 invisible opacity-0 translate-y-[3rem] transition-all duration-300 delay-[0ms] group-hover:translate-y-0 group-hover:h-fit group-hover:visible group-hover:opacity-100 group-hover:delay-150"
                  ref={refWomen}
                >
                  <NavbarMenu
                    posters_default={[
                      'https://cdn.shopify.com/s/files/1/0667/0133/files/AmplifyJune_13.jpg?crop=center&height=300&v=1654936386&width=250',
                      'https://cdn.shopify.com/s/files/1/0667/0133/files/Amplify_06.jpg?crop=center&height=300&v=1653147420&width=250'
                    ]}
                    title_1="Tops"
                    title_2="Bottoms"
                    links_1={[
                      'Sports Bras',
                      'Tank Tops',
                      'Shirts & Crops',
                      'Long Sleeves',
                      'Jackets & Hoodies'
                    ]}
                    posters_1={[
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_bra_2.jpg?crop=center&v=1655150635&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_tank.jpg?crop=center&v=1655150475&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_short_sleeve.jpg?crop=center&v=1655152437&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_long_sleeve_2.jpg?crop=center&v=1655150459&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_hoodies.jpg?crop=center&v=1655150441&width=520'
                    ]}
                    links_2={[
                      'Shorts',
                      'Leggings',
                      'Joggers',
                      'Dresses & Skirts',
                      'Underwear'
                    ]}
                    posters_2={[
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_Shorts.jpg?crop=center&v=1655150037&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/women_seamles.jpg?crop=center&v=1655152221&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_jogger.jpg?crop=center&v=1655152897&width=520',
                      'https://cdn.shopify.com/s/files/1/0667/0133/collections/w_dress.jpg?crop=center&v=1655150420&width=520'
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button className="w-[40px] h-[40px] rounded-full hover:bg-secondary_30 dark:hover:bg-primary_30 transition-all">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-inherit text-[1rem]"
                />
              </button>
              <button className="w-[40px] h-[40px] rounded-full hover:bg-secondary_30 dark:hover:bg-primary_30 transition-all">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-inherit text-[1rem]"
                />
              </button>
              <button
                onClick={handleMode}
                className="sm:block md:block hidden w-[40px] h-[40px] rounded-full hover:bg-secondary_30 dark:hover:bg-primary_30 transition-all"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="text-inherit text-[1rem]"
                />
              </button>
            </div>
          </div>
          <div
            style={{ height: rectMen?.height || rectWomen?.height }}
            className="transition-all duration-500"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
