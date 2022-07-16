import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import SlideShow from '../components/slideshow';
import handleDarkMode, { checkDarkMode } from '../utils/dark-mode';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  else {
    checkDarkMode();
    return (
      <div>
        <Header title="Alphalete" />
        <Navbar />
        <SlideShow />
        <button onClick={handleDarkMode}>Change Theme</button>
      </div>
    );
  }
};

export default Home;
