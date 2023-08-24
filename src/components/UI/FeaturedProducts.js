import styles from '@styles/products.module.css';
import { Button, Col, Row, Typography } from 'antd';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import FeaturedCard from './FeaturedCard';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const FeaturedProducts = ({ pcParts }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const router = useRouter();
  const isProductsPage = router.route === '/products/[category]';

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);
  return (
    <div
      className={
        !isProductsPage ? styles.container : styles.containerProduct
      }>
      <Row>
        <Col
          span={24}
          lg={7}
          id={styles.hero1}
          className={styles.hero}>
          <div className={styles.inner}>
            <div className={styles.coupon_card}>
              <motion.div
                className="box"
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}>
                <h1>Summer Sale</h1>
                <p>20% Off</p>{' '}
              </motion.div>
            </div>

            <div className={styles.copy}>
              <Image
                src="/images/prime-logo.png"
                alt=""
                width={160}
                height={25}
              />
              <Typography.Title style={{ color: '#f0f0f7' }}>
                Our Newest Releases
              </Typography.Title>
              <p>
                Its like im actually there! But sitting at a computer.
                Wow, the future is intense!
              </p>
              <Button size="large" className={styles.btn}>
                Explore now
              </Button>
            </div>
          </div>
        </Col>
        <Col span={24} lg={17} className={styles.right}>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {pcParts.map((part) => (
              <Col lg={12} span={24} key={part._id}>
                <FeaturedCard part={part} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <div className="others"></div>
    </div>
  );
};

export default FeaturedProducts;
