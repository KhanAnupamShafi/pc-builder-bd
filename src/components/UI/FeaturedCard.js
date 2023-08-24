import { StarOutlined } from '@ant-design/icons';
import { addToBuilder } from '@redux/features/pcPartsSlice';
import styles from '@styles/products.module.css';
import { Badge, Button, Tag, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const { Paragraph, Text } = Typography;

const FeaturedCard = ({ part }) => {
  const router = useRouter();
  const isAddPage = router.asPath.startsWith('/add/');
  const { image, name, rating, category, type, stock, price } =
    part || {};

  const dispatch = useDispatch();

  const handleAddToBuilder = () => {
    if (isAddPage) {
      // Dispatch the addToBuilder action
      dispatch(addToBuilder(part));

      router.push(`/pc-builder`);
    } else {
      router.push(`/product/${part._id}`);
    }
  };

  return (
    <Badge.Ribbon
      color={stock ? 'green' : 'pink'}
      text={stock ? 'In Stock' : 'Sold Out'}>
      <div onClick={handleAddToBuilder}>
        <div className={styles.productCardContainer}>
          <div className={styles.productImageWrapper}>
            <Image
              width={400}
              height={400}
              className={styles.productImage}
              src={image}
              alt="h9-flow-hero-white"
              title={`Choose ${name}`}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmPi/HgAEOgIRSYtutwAAAABJRU5ErkJggg==)"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!isAddPage ? (
              <button
                type="button"
                className={styles.quickShopButton}>
                <div className={styles.quickShopLink}>Quick Shop</div>
              </button>
            ) : (
              <Button type="primary" danger block>
                Add To Builder
              </Button>
            )}
          </div>
          <div className={styles.productDetails}>
            <Paragraph className={styles.productTitle}>
              {name}
              <Tag color="cyan" className={styles.productCategory}>
                <span className={styles.productCategory}>
                  {category}
                </span>
              </Tag>
            </Paragraph>
            <Paragraph className={styles.productSubtitle}>
              {type}
            </Paragraph>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <div className={styles.productPrice}>$ {price}</div>

            <div className={styles.productColorVariants}>
              <span
                style={{ marginRight: '0.3rem', fontSize: '14px' }}>
                <strong>{rating}</strong> out of <b>5</b> stars
              </span>
              {Array(Math.ceil(rating))
                .fill()
                .map((_, i) => (
                  <button
                    key={i}
                    aria-pressed="true"
                    aria-label={`Choose ${name}`}
                    id="variant-select-button-h9-flow-matte-white"
                    className={styles.colorVariantButton}>
                    <span className={styles.extraStylesSwatchDefault}>
                      <StarOutlined />
                    </span>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Badge.Ribbon>
  );
};

export default FeaturedCard;
