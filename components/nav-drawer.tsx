import { useContext } from 'react';
import { NavbarContext } from '../utils/navbar-controller';
import LinkBtn from './link-btn';

const NavDrawer = () => {
  const { mode, handleMode } = useContext(NavbarContext);
  return (
    <div
      className={`${mode === 'closeDrawer' ? 'translate-y-full' : 'translate-y-0'
        } w-full h-screen fixed bottom-0 left-0 z-[25] flex justify-center items-end transition-transform duration-500`}
      onClick={handleMode}
    >
      <div
        className={`${mode === 'closeDrawer' ? 'invisible opacity-0' : 'visible opacity-100'
          } w-screen h-screen fixed top-0 left-0 backdrop-blur-sm z-20 delay-500 transition-all`}
      ></div>
      <div className="w-full max-w-[700px] h-[90vh] flex-col items-center bg-primary_80 dark:bg-secondary_80 relative z-30 border-t border-secondary_20 dark:border-primary_20 rounded-t-3xl backdrop-saturate-[1.8] backdrop-blur-[3px]">
        <div className="w-full flex justify-center pt-2">
          <LinkBtn href="/collections/men">
            <p className="font-bold text-[1.5rem] leading-none px-1">MEN</p>
          </LinkBtn>
          <LinkBtn href="/collections/men">
            <p className="font-bold text-[1.5rem] leading-none px-1">WOMEN</p>
          </LinkBtn>
        </div>
        <hr className="w-[calc(100%-3rem)] my-2 mx-auto border-t border-t-secondary_40 dark:border-t-primary_40" />
        <div className="w-full flex columns-2">
          <div className="w-full px-6 flex-col">
            <p className="leading-none font-bold text-[1.2rem] ">Bottoms</p>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
          </div>
          <div className="w-full px-6 flex-col">
            <p className="leading-none font-bold text-[1.2rem]">Tops</p>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
            <div className="w-fit h-5 my-4">
              <LinkBtn href="/">
                <p className="leading-none m-0 p-0 font-bold text-[1rem] text-secondary_70 dark:text-primary_70">
                  Stringers
                </p>
              </LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDrawer;
