import Shape from '@assets/shape.svg';
import styles from '@styles/slider.module.css';
import { Carousel } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
// import Background from '../../assets/banner-bg.png';

const Slider = () => (
  <Carousel
    dotPosition="left"
    effect="fade"
    autoplay
    style={{ overflow: 'hidden' }}>
    {slides.map((slide, index) => (
      <div key={index}>
        <div
          className={styles.content}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}>
          <div className={styles.headerOverlay}>
            <div className={styles.relayAudio}>
              <h3
                className={styles.relayHeading}
                dangerouslySetInnerHTML={{
                  __html: slide.heading,
                }}></h3>
              <div className={styles.relayParagraph}>
                {slide.paragraph}
              </div>
              <div style={{ marginTop: '1rem' }}>
                <div className={styles.relayContainer}>
                  <Link
                    className={styles.relayButton}
                    href={slide.buttonLink}>
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.shape}>
            <Image
              width={0}
              height={0}
              alt="Shape"
              src={Shape}
              placeholder="empty"
            />
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);
export default Slider;

const slides = [
  {
    imageUrl:
      'https://res.cloudinary.com/de98kpzgn/image/upload/v1691035467/bg-1_jfdub9.webp',
    heading: 'New Look, <br /> Better Performance',
    paragraph: 'Now Built in the new H9 Elite.',
    buttonText: 'Shop Now',
    buttonLink: '/',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/de98kpzgn/image/upload/v1691035626/2hero-bg-2xl_ag1ubd.webp',
    heading: 'Relay Audio',
    paragraph:
      'Switch from Hi-Res Audio to room-filling sound in an instant.',
    buttonText: 'Shop Relay Audio',
    buttonLink: '/',
  },
  {
    imageUrl:
      'https://res.cloudinary.com/de98kpzgn/image/upload/v1691040503/photo_com3r3.webp',
    heading: 'Build It Your Way',
    paragraph:
      'Create the ultimate desk setup with our lineup of NZXT products to make for a customizable and cohesive desktop environment',
    buttonText: 'Build Now',
    buttonLink: '/pc-builder',
  },
  // Add more slides as needed
];
