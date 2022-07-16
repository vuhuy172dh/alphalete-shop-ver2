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
    <div className="w-full px-12 py-12">
      <div className="flex w-full h-full items-center">
        <div className="w-full flex mr-auto">
          <div className="flex flex-col mr-8 w-full">
            <h4 className="font-bold text-[1.1rem] mb-4">SUPPORT</h4>
            <ul className="flex flex-col items-start gap-4 pl-2">
              {support_links.map((support, index) => (
                <li className="w-fit" key={index}>
                  <LinkBtn href={`/supports`}>
                    <p className="font-normal text-[0.8rem] leading-none">
                      {support}
                    </p>
                  </LinkBtn>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-full">
            <h4 className="font-bold text-[1.1rem] mb-4">INFO</h4>
            <ul className="flex flex-col items-start gap-4 pl-2">
              {info_links.map((info, index) => (
                <li className="w-fit" key={index}>
                  <LinkBtn href="/info">
                    <p className="font-normal text-[0.8rem] leading-none">
                      {info}
                    </p>
                  </LinkBtn>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-col ml-auto w-fit h-full items-end gap-4">
            <h3 className="font-bold text-[1.5rem] leading-normal text-end">
              SIGN UP FOR ALPHALETE NEWSLETTER
            </h3>
            <form className="flex w-full gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="flex-[2] w-full h-full py-4 pl-2 bg-transparent border border-secondary_40 dark:border-primary_40 rounded-lg"
              />
              <button className="w-full flex-1 font-bold text-[1rem] bg-secondary_40 rounded-2xl dark:bg-primary_40 hover:bg-secondary_60 dark:hover:bg-primary_60">
                SIGN UP
              </button>
            </form>
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
        <span>&copy; 2022 | Alphalete Athletics LLC | All Rights Reserved</span>
        <small>LEARN MORE | DREAM MORE | BE MORE</small>
      </div>
    </div>
  );
};

export default Footer;
