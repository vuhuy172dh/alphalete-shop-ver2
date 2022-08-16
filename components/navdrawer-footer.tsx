import {
  faCircleUser,
  faTruckFast,
  faBriefcase,
  faCircleQuestion,
  faRotate,
  faCircleInfo,
  faToggleOn,
  faToggleOff
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTiktok,
  faTwitter,
  faFacebookF,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { DarkModeContext } from '../utils/dark-mode';
import Link from 'next/link';

const NavdrawerFooter = () => {
  const { mode, handleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="w-full flex-col">
      <div className="w-full flex columns-2 px-9 my-12">
        <div className="flex flex-col w-full items-start">
          <Link href="/login">
            <div className="flex my-4 cursor-pointer items-center justify-start">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="text-[1.5rem] text-secondary_70 dark:text-primary_70"
              />
              <p className="text-[1.2rem] leading-none font-bold pl-2 text-secondary_70 dark:text-primary_70">
                Sign In
              </p>
            </div>
          </Link>
          <div className="flex my-4 cursor-pointer justify-start items-center">
            <FontAwesomeIcon
              icon={faTruckFast}
              className="text-[1.5rem] text-secondary_70 dark:text-primary_70"
            />
            <p className="text-[1.2rem] leading-none font-bold pl-2 text-secondary_70 dark:text-primary_70">
              Shipping Info
            </p>
          </div>
          <div className="flex my-4 cursor-pointer justify-start items-center">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="text-[1.5rem] text-secondary_70 dark:text-primary_70"
            />
            <p className="text-[1.2rem] leading-none font-bold pl-2 text-secondary_70 dark:text-primary_70">
              Careers
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full items-start">
          <div className="flex my-4 cursor-pointer justify-start items-center">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="text-[1.5rem] text-secondary_70 dark:text-primary_70"
            />
            <p className="text-[1.2rem] leading-none font-bold pl-2 text-secondary_70 dark:text-primary_70">
              Help Center
            </p>
          </div>
          <div className="flex my-4 cursor-pointer justify-start items-center">
            <FontAwesomeIcon
              icon={faRotate}
              className="text-[1.5rem] text-secondary_70 dark:text-primary_70"
            />
            <p className="text-[1.2rem] leading-none font-bold pl-2 text-secondary_70 dark:text-primary_70">
              Returns & Exchange
            </p>
          </div>
          <div className="flex my-4 cursor-pointer justify-start items-center">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-[1.5rem] text-secondary_70 dark:text-primary_70"
            />
            <p className="text-[1.2rem] leading-none font-bold pl-2 text-secondary_70 dark:text-primary_70">
              About us
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[calc(100%-3rem)] my-2 mx-auto border-t border-t-secondary_40 dark:border-t-primary_40" />
      <div className="w-full flex my-6 px-6 justify-between items-center">
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-[1.5rem] leading-none"
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faTiktok}
            className="text-[1.5rem] leading-none"
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[1.5rem] leading-none"
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-[1.5rem] leading-none"
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-[1.5rem] leading-none"
          />
        </div>
        <button onClick={handleDarkMode}>
          <FontAwesomeIcon
            icon={mode === 'dark' ? faToggleOn : faToggleOff}
            className="text-[2.5rem] leading-none"
          />
        </button>
      </div>
    </div>
  );
};

export default NavdrawerFooter;
