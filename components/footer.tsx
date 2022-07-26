import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import LinkBtn from './link-btn';
import { useContext } from 'react';
import { DarkModeContext } from '../utils/dark-mode';

const Footer = () => {
  const support_links = [
    'help-center',
    'contact us',
    'shipping info',
    'returns & changes'
  ];
  const info_links = ['about us', 'alphaland', 'summer shredding', 'careers'];
  const { mode, handleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="w-full flex flex-col px-12 py-12 sm:px-6 sm:gap-16 md:gap-16">
      <div className="flex sm:flex-col-reverse sm:gap-8 md:flex-col-reverse md:gap-8 w-full h-full items-center">
        <div className="w-full flex sm:flex-col sm:gap-12 md:flex-col md:gap-12 mr-auto">
          <div className="flex flex-col sm:p-8 sm:border sm:rounded-lg sm:border-secondary_50 dark:sm:border-primary_50 md:p-8 md:border md:rounded-lg md:border-secondary_50 dark:md:border-primary_50 mr-8 w-full">
            <h4 className="font-bold text-[1.1rem] mb-4 sm:text-[1.5rem] md:text-[1.5rem]">
              SUPPORT
            </h4>
            <ul className="flex flex-col items-start gap-4 pl-2">
              {support_links.map((support, index) => (
                <li className="w-fit" key={index}>
                  <LinkBtn href={`/supports`}>
                    <p className="font-normal text-[0.8rem] sm:text-[1rem] md:text-[1rem] leading-none">
                      {support}
                    </p>
                  </LinkBtn>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full sm:p-8 sm:border sm:rounded-lg sm:border-secondary_50 dark:sm:border-primary_50 md:p-8 md:border md:rounded-lg md:border-secondary_50 dark:md:border-primary_50">
            <h4 className="font-bold text-[1.1rem] mb-4 sm:text-[1.5rem] md:text-[1.5rem]">
              INFO
            </h4>
            <ul className="flex flex-col items-start gap-4 pl-2">
              {info_links.map((info, index) => (
                <li className="w-fit" key={index}>
                  <LinkBtn href="/info">
                    <p className="font-normal text-[0.8rem] sm:text-[1rem] md:text-[1rem] leading-none">
                      {info}
                    </p>
                  </LinkBtn>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col ml-auto w-fit h-full gap-4 sm:w-full md:w-full">
            <h3 className="font-bold text-[1.5rem] leading-normal text-end sm:text-center md:text-center">
              SIGN UP FOR ALPHALETE NEWSLETTER
            </h3>
            <form className="flex w-full gap-2 sm:flex-col md:flex-col">
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="flex-[2] w-full h-full py-4 pl-2 bg-transparent border border-secondary_40 dark:border-primary_40 rounded-lg"
              />
              <button className="w-full h-full py-4 flex-1 font-bold text-[1rem] bg-secondary_40 rounded-lg dark:bg-primary_40 hover:bg-secondary_60 dark:hover:bg-primary_60">
                SIGN UP
              </button>
            </form>
            <hr className="hidden w-full border-secondary_50 dark:border-primary_50 sm:block md:block" />
            <div className="flex w-full h-full items-center">
              <ul className="w-full flex justify-between flex-1">
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[1.3rem]"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-[1.3rem]"
                  />
                </li>
                <li>
                  <FontAwesomeIcon icon={faYoutube} className="text-[1.3rem]" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTwitter} className="text-[1.3rem]" />
                </li>
                <li>
                  <FontAwesomeIcon icon={faTiktok} className="text-[1.3rem]" />
                </li>
              </ul>
              <button className="ml-12" onClick={handleDarkMode}>
                <FontAwesomeIcon
                  icon={mode === 'dark' ? faToggleOn : faToggleOff}
                  className="text-[2.5rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[1rem] font-bold sm:text-[0.7rem] md:text-[0.9rem]">
          &copy; 2022 | Alphalete Athletics LLC | All Rights Reserved
        </span>
        <small className="font-bold">LEARN MORE | DREAM MORE | BE MORE</small>
      </div>
    </div>
  );
};

export default Footer;
