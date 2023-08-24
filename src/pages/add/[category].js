// 'use-client';
import RootLayout from '@components/Layout/RootLayout';
import FeaturedProducts from '@components/UI/FeaturedProducts';

const SelectProductPage = ({ products, categoryName }) => {
  return (
    <>
      <div style={{ paddingTop: '0.2rem' }}>
        <FeaturedProducts pcParts={products} />
      </div>
    </>
  );
};

export default SelectProductPage;

SelectProductPage.getLayout = (Page) => {
  return <RootLayout>{Page}</RootLayout>;
};

const categoryNamesMap = {
  cpu: 'CPU / Processor',
  motherboard: 'Motherboard',
  memory: 'RAM',
  'power-supply': 'Power Supply Unit',
  'internal-storage': 'Storage Device',
  monitor: 'Monitor',
  others: 'Other',
};

/**********************
 * * Server Side Render *
 **********************/

export const getServerSideProps = async ({ params }) => {
  const { category } = params;
  const res = await fetch(
    `https://pc-parts-api-henna.vercel.app/api/products/${category}`
  );
  const products = await res.json();

  return {
    props: {
      products,
      categoryName: categoryNamesMap[category],
    },
  };
};

/**************
 * SSG RENDER *
 **************/

// export const getStaticPaths = async () => {
//   const categoryNames = Object.keys(categoryNamesMap);

//   const paths = categoryNames.map((categoryName) => ({
//     params: { category: categoryName },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps = async ({ params }) => {
//   const { category } = params;
//   const res = await fetch(
//     `https://pc-parts-api-henna.vercel.app/api/products/${category}`
//   );
//   const products = await res.json();

//   return {
//     props: {
//       products,
//       categoryName: categoryNamesMap[category],
//     },
//   };
// };
