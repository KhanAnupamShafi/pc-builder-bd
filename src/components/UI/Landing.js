import styles from '@styles/slider.module.css';
import { Button, Col, Image, Row } from 'antd';
const Landing = () => {
  return (
    <div className={styles.textBox}>
      <Row>
        <Col span={15} push={9}>
          <Image
            src="/images/pc.png"
            alt="pc nzxt"
            layout="fill"
            loading="lazy"
          />
        </Col>
        <Col span={9} pull={15}>
          <div className={styles.text}>
            <h2>Reasons for Choosing US</h2>
            <p>
              We build custom PCs around your budget, optimized for
              the games you love, all protected by a 2-year warranty.
            </p>
            <Button>Build PC Now</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
