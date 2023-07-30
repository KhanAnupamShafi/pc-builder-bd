import Shape from '@assets/shape.svg';
import styles from '@styles/slider.module.css';
import { Carousel } from 'antd';
import Image from 'next/image';
// import Background from '../../assets/banner-bg.png';

const Slider = () => (
  <Carousel effect="fade" autoplay style={{ overflow: 'visible' }}>
    <div>
      <div
        className={styles.content}
        style={{
          backgroundImage: `url('/images/banner-bg.png')`,
        }}>
        <div className={styles.headerOverlay}>
          <h1>Creative </h1>
          <h3>Reasons for Choosing US</h3>
        </div>
        <div className={styles.shape}>
          <Image width={0} height={0} alt="Shape" src={Shape} />
        </div>
      </div>
    </div>
    {/* <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div> */}
  </Carousel>
);
export default Slider;
