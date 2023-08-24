import RootLayout from '@components/Layout/RootLayout';
import FeaturedProducts from '@components/UI/FeaturedProducts';
import styles from '@styles/category.module.css';
import { Col, Row } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ProductsByCategoryPage = ({ products, categoryName }) => {
  const router = useRouter();
  const imageUrl = `/images/h${router?.query.category}.png`;

  return (
    <>
      <div className={styles.titleBox}>
        <Row justify="center" align="center">
          <Col span={16}>
            <div className={styles.titleBar}>
              <p className={styles.fontHeader}>{categoryName}</p>
              <p className={styles.subheader}>
                Gaming Motherboards with Wi-Fi and NZXT CAM
              </p>
              <div
                id={styles.imageCategory}
                className={styles.iCategory}>
                <Image
                  height={120}
                  width={400}
                  src={imageUrl}
                  alt="h9-flow-hero-white"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmPi/HgAEOgIRSYtutwAAAABJRU5ErkJggg==)"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ paddingTop: '2rem' }}>
        <FeaturedProducts pcParts={products} />
      </div>
    </>
  );
};

export default ProductsByCategoryPage;

ProductsByCategoryPage.getLayout = (Page) => {
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

export const getStaticPaths = async () => {
  const categoryNames = Object.keys(categoryNamesMap);

  const paths = categoryNames.map((categoryName) => ({
    params: { category: categoryName },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
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
