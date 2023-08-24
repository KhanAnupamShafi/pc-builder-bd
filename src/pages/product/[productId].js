// 'use-client';

import {
  ChromeFilled,
  FacebookOutlined,
  FrownTwoTone,
  LinkedinOutlined,
  SmileFilled,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import RootLayout from '@components/Layout/RootLayout';
import BreadcrumbComponent from '@components/UI/BreadcrumbComponent';
import styles from '@styles/single.module.css';
import {
  Button,
  Card,
  Carousel,
  Col,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailPage = ({ product }) => {
  const { image, name, type, price, rating, category, stock } =
    product || {};

  return (
    <>
      <div className={styles.container}>
        <BreadcrumbComponent category={category} name={name} />
      </div>
      <div className={styles.productDetail}>
        <Row justify={'center'} gutter={16}>
          <Col span={24} lg={8}>
            <Card
              title={
                stock ? (
                  <Button
                    style={{
                      background: '#1bd039',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                    success
                    icon={<SmileFilled />}>
                    In Stock
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    danger
                    icon={<FrownTwoTone />}>
                    Sold Out
                  </Button>
                )
              }
              bordered={false}>
              <Carousel autoplay>
                <div>
                  <div className={styles.contentStyle}>
                    <Image
                      style={{ objectFit: 'contain' }}
                      width={400}
                      height={400}
                      alt={name}
                      src={image}
                    />
                  </div>
                </div>
                <div>
                  <div className={styles.contentStyle}>
                    <Image
                      style={{ objectFit: 'contain' }}
                      width={400}
                      height={400}
                      alt={name}
                      src={image}
                    />
                  </div>
                </div>
              </Carousel>
            </Card>
          </Col>
          <Col span={24} lg={8}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: 'flex' }}>
              <Card
                title={<p>Options Available At Checkout</p>}
                bordered={true}>
                <Space
                  direction="vertical"
                  style={{ display: 'flex' }}>
                  <h1 className={styles.title}>{name}</h1>
                  <Typography.Title level={5} type="secondary">
                    {type}
                  </Typography.Title>
                  <Typography.Title level={5} strong>
                    ${price}
                  </Typography.Title>
                  <Space>
                    <Typography.Text type="secondary" strong>
                      category:{' '}
                      <Tag bordered={false} color="purple">
                        {category}
                      </Tag>
                    </Typography.Text>
                    <Typography.Text type="secondary" strong>
                      Rating:{' '}
                      <Typography.Text type="success">
                        {rating}
                      </Typography.Text>{' '}
                      out of 5 star
                    </Typography.Text>
                  </Space>
                </Space>
              </Card>
              <Card
                extra={
                  <Space size={[0, 7]} wrap>
                    <Tag
                      icon={<TwitterOutlined />}
                      color="#55acee"></Tag>
                    <Tag
                      icon={<YoutubeOutlined />}
                      color="#cd201f"></Tag>
                    <Tag
                      icon={<FacebookOutlined />}
                      color="#3b5999"></Tag>
                    <Tag
                      icon={<LinkedinOutlined />}
                      color="#55acee"></Tag>
                  </Space>
                }
                bordered={true}>
                {stock ? (
                  <Button
                    style={{ background: '#faffd2' }}
                    type="link"
                    block>
                    Add To Cart
                  </Button>
                ) : (
                  <Button type="primary" block>
                    Notify Me
                  </Button>
                )}
                <Space size={[5, 5]} wrap className={styles.policy}>
                  <ChromeFilled
                    style={{
                      verticalAlign: 'middle',
                      color: '#eb2f96',
                    }}
                  />
                  <Link href="#">Return Policy</Link>
                  <Link href="#">Warranty Policy</Link>
                  <Link href="#">CAM Enabled</Link>
                </Space>
              </Card>
            </Space>
          </Col>
        </Row>
        <Row
          justify={'center'}
          gutter={16}
          style={{ marginTop: '10px' }}>
          <Col span={24} lg={16}>
            <Card
              hoverable
              style={{
                maxWidth: '900px',
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignContent: 'center',
                background:
                  'linear-gradient(to left, #60a5fa, #3b82f6, #1e40af)',
              }}
              cover={
                <img
                  alt="example"
                  src="https://nzxt.com/_next/image?url=%2FdefaultImages%2Fcs.png&w=256&q=75"
                />
              }>
              <Space direction="vertical" style={{ display: 'flex' }}>
                <Typography.Title
                  level={2}
                  strong
                  style={{ color: '#fff' }}>
                  Have Questions ?
                </Typography.Title>
                <Typography.Title level={5} style={{ color: '#fff' }}>
                  Our Experts Are Ready To help
                </Typography.Title>
                <Button>Chat now</Button>
              </Space>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = (Page) => {
  return <RootLayout>{Page}</RootLayout>;
};

/**
/**********************************************************************************
 * * * ------------------------------ SSG RENDERING ----------------------------- *
 **********************************************************************************/

export const getStaticPaths = async () => {
  const res = await fetch(
    'https://pc-parts-api-henna.vercel.app/api/products/all'
  );
  const data = await res.json();
  const paths = data.map((product) => ({
    params: { productId: product._id.toString() },
  }));

  return { paths, fallback: false };
};

/*****************************************************************
 * *                    THIS WILL RETURN [                     * *
 * *              { params: { productId: '1' } },              * *
 * *              { params: { productId: '2' } },              * *
 * *              { params: { productId: '3' } },              * *
 * *                             ]                             * *
 * * IF  /products/[productId].js, HAS 3 PRODUCT WITH ID 1,2,3 * *
 *****************************************************************/

/**************************************************************************************************
 * * * getStaticProps WILL BE CALLED / MAPPED ON THE ABOVE ARRAY FROM WHERE WE CAN DESTRUCTURE PARAMS *
 **************************************************************************************************/
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://pc-parts-api-henna.vercel.app/api/product/${params.productId}`
  );
  const data = await res.json();
  return {
    props: { product: data },
  };
};
