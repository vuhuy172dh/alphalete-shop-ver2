import Head from 'next/head';

interface Props {
  title: string;
  icon?: string;
}

const Header = ({ title, icon = '/favicon.ico' }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href={icon} />
    </Head>
  );
};

export default Header;
