import styles from '@styles/slider.module.css';
import { Button, Col, Image, Row } from 'antd';
const Landing = () => {
  return (
    <div className={styles.textBox}>
      <Row gutter={4}>
        <Col lg={15} sm={24} order={1}>
          <Image
            src="/images/pc.png"
            alt="pc nzxt"
            layout="fill"
            loading="lazy"
          />
        </Col>
        <Col lg={9} sm={24}>
          <div className={styles.text}>
            <div>
              <h2>Reasons for Choosing US</h2>
              <p>
                We build custom PCs around your budget, optimized for
                the games you love, all protected by a 2-year
                warranty.
              </p>
              <Button>Customize PC Now</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
