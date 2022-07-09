import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alphalete</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-bold text-2xl flex justify-center bg-white dark:bg-black">
        HELLO WORLD
      </div>
    </div>
  );
};

export default Home;
