import type { NextPage } from 'next';
import Footer from '../components/footer';
import Header from '../components/header';
import SlideShow from '../components/slideshow';
import Trending from '../components/trending';

const Home: NextPage = () => {
    return (
        <div>
          <Header title="Alphalete" />
          <SlideShow />
          <Trending />
          <Footer />
        </div>
    );
};

export default Home;
