import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import ScrollObserver from '../utils/scroll-observer';
import '@fortawesome/fontawesome-svg-core/styles';
import { config } from '@fortawesome/fontawesome-svg-core';
import NavDrawer from '../components/nav-drawer';
import Navbar from '../components/navbar';
import NavMode from '../utils/navbar-controller';
import Footer from '../components/footer';
import DarkMode from '../utils/dark-mode';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  else {
    return (
      <ScrollObserver>
        <DarkMode>
          <NavMode>
            <Navbar />
            <NavDrawer />
          </NavMode>
          <Component {...pageProps} />
          <Footer />
        </DarkMode>
      </ScrollObserver>
    );
  }
}

export default MyApp;
