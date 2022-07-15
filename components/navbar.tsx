import Link from 'next/link';
import React, { useContext, useState } from 'react';
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

const Navbar = () => {
  const [isMenHovered, setIsMenHovered] = useState<boolean>(false);
  const [isWomenHovered, setIsWomenHovered] = useState<boolean>(false);
  const { rect: rectMen, ref: refMen } = useClientRect([isMenHovered]);
  const { rect: rectWomen, ref: refWomen } = useClientRect([isWomenHovered]);

  console.log(rectMen?.height);
  const { scrollY } = useContext(ScrollContext);

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
        <div className="w-full max-w-[1234px] flex flex-col items-center mx-auto rounded-b-[1.5rem] sm:rounded-b-2xl border border-secondary_20 dark:border-primary_20 bg-primary_80 dark:bg-secondary_80">
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
              <ButtonSlideEffect>
                <p className="h-full flex items-center text-[0.8rem] font-bold opacity-70 px-2 hover:opacity-100">
                  Info
                </p>
              </ButtonSlideEffect>
              <LinkBtn href="/account/login">
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
              <button className="sm:block md:block hidden w-[40px] h-[40px] rounded-full hover:bg-secondary_30 dark:hover:bg-primary_30 transition-all">
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
