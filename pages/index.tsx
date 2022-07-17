import type { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import SlideShow from '../components/slideshow';
import Trending from '../components/trending';
import DarkMode from '../utils/dark-mode';

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  else {
    return (
      <DarkMode>
        <div>
          <Header title="Alphalete" />
          <Navbar />
          <SlideShow />
          <Trending />
          <Footer />
        </div>
      </DarkMode>
    );
  }
};

export default Home;
