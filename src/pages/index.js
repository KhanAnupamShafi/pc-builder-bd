// 'use-client';
import RootLayout from '@components/Layout/RootLayout';
import Category from '@components/UI/Category';
import FeaturedProducts from '@components/UI/FeaturedProducts';
import Landing from '@components/UI/Landing';
import Head from 'next/head';

export default function Home({ pcParts }) {
  return (
    <>
      <Head>
        <title>PC Builder App Next JS</title>
        <meta
          name="description"
          content="A Next.js site using new SSG support, NextAuth and Ant Design 5 where user can login and graphically build a PC based on components stored in an MongoDB database"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Landing />
      <FeaturedProducts pcParts={pcParts} />
      <Category />
    </>
  );
}

Home.getLayout = (Page) => {
  return <RootLayout>{Page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://pc-parts-api-henna.vercel.app/api/products'
  );
  const data = await res.json();

  return {
    props: {
      pcParts: data,
    },
  };
};
