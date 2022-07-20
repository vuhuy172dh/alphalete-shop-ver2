import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ScrollObserver from '../utils/scroll-observer';
import '@fortawesome/fontawesome-svg-core/styles';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}

export default MyApp;
