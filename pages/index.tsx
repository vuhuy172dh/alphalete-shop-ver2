import type { NextPage } from 'next';
import Header from '../components/header';
import SlideShow from '../components/slideshow';
import Trending from '../components/trending';

const Home: NextPage = () => {
    return (
        <div>
          <Header title="Alphalete" />
          <SlideShow />
          <Trending />
        </div>
    );
};

export default Home;
