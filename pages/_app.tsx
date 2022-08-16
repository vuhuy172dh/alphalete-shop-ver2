import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utils/scroll-observer';
import '@fortawesome/fontawesome-svg-core/styles';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavDrawer from '../components/nav-drawer';
import Navbar from '../components/navbar';
import NavMode from '../utils/navbar-controller';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <NavMode>
        <Navbar />
        <NavDrawer />
      </NavMode>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}

export default MyApp;
