import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import NavDrawer from '../components/nav-drawer';
import Navbar from '../components/navbar';
import SlideShow from '../components/slideshow';
import Trending from '../components/trending';
import DarkMode from '../utils/dark-mode';
import NavMode from '../utils/navbar-controller';

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
          <NavMode>
            <Navbar />
            <NavDrawer />
          </NavMode>
          <SlideShow />
          <Trending />
          <Footer />
        </div>
      </DarkMode>
    );
  }
};

export default Home;
