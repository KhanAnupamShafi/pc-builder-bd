'use-client';
import styles from '@styles/footer.module.css';
import { Image } from 'antd';
import Link from 'next/link';
const TopFooter = () => {
  return (
    <div className={styles.footerN45}>
      <div className={styles.innO37}>
        <ul className={styles.footerList}>
          <li>
            <Link href="/" className={styles.footerLink}>
              <div className={styles.tpZlm}>
                <div className={styles.fbykv}>
                  <Image
                    preview={false}
                    src="https://www.pcspecialist.co.uk/images/misc/iso-registered.png"
                    width="80"
                    height="80"
                    alt="ISO Registered"
                  />
                  <div className={styles.isoRegisteredSgd}>
                    <p>Cert No. 12959</p>
                  </div>
                </div>
                <div className={styles.fbykv}>
                  <div className={styles.contentKne}>
                    <p style={{ marginBottom: 5 }}>ISO Certified</p>
                    {[...Array(3)].map((_, index) => (
                      <div key={index}>
                        <Image
                          preview={false}
                          style={{ verticalAlign: 'baseline' }}
                          src="https://www.pcspecialist.co.uk/images/misc/iso-registered-tick.png"
                          width="13"
                          height="13"
                          alt="Tick"
                        />
                        <span style={{ marginLeft: 5 }}>
                          ISO 900{index}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <div
              className={`${styles.contentD44} ${styles.styleCyHoD}`}
              id="style-CyHoD">
              <a href="/why-buy/" className={styles.footerLink}>
                MORE THAN <span>70,000</span> CUSTOMER REVIEWS
              </a>
            </div>
          </li>
          <li>
            <a
              href="https://www.youtube.com/embed/mUDN8rcc67A"
              className={styles.footerLink}>
              <div className={styles.videoContainer}>
                <img
                  src="https://www.pcspecialist.co.uk/images/misc/footer-video-hover-state.png"
                  width="170"
                  height="103"
                  className={styles.video56j}
                  alt="Video Hover State"
                />
                <button className={styles.playButton}>
                  <img
                    src="https://www.pcspecialist.co.uk/images/misc/video-play-button.png"
                    width="47"
                    height="47"
                    alt="Play Video"
                  />
                </button>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopFooter;
