import { AppstoreAddOutlined, HomeOutlined } from '@ant-design/icons';
import styles from '@styles/single.module.css';
import { Breadcrumb } from 'antd';
const BreadcrumbComponent = ({ category, name }) => {
  const categoryMappings = {
    'CPU / Processor': 'cpu',
    Motherboard: 'motherboard',
    RAM: 'memory',
    'Power Supply Unit': 'power-supply',
    'Storage Device': 'internal-storage',
    Monitor: 'monitor',
    Other: 'others',
  };
  return (
    <Breadcrumb
      className={styles.breadcrumb}
      items={[
        {
          href: '/',
          title: <HomeOutlined />,
        },
        {
          href: `/products/${categoryMappings[category]}`,
          title: (
            <>
              <AppstoreAddOutlined />
              <span style={{ color: '#ffa322' }}>{category}</span>
            </>
          ),
        },
        {
          title: <p> {name}</p>,
        },
      ]}
    />
  );
};

export default BreadcrumbComponent;
