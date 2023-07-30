import {
  DownOutlined,
  FacebookFilled,
  GithubOutlined,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled,
  UserOutlined,
} from '@ant-design/icons';
import SvgGoogle from '@assets/svg/Google';
import styles from '@styles/slider.module.css';
import { Avatar, Button, Dropdown, Space, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Text } = Typography;

const TopBar = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.topBar}>
        <div className={styles.topContent}>
          <Space
            direction="horizontal"
            size={42}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
            }}>
            <Space>
              <Button
                icon={
                  <FacebookFilled
                    style={{ fontSize: '20px', color: '#3b5999' }}
                  />
                }></Button>
              <Button
                icon={
                  <TwitterSquareFilled
                    style={{ fontSize: '20px', color: '#55acee' }}
                  />
                }></Button>
              <Button
                icon={
                  <LinkedinFilled
                    style={{ fontSize: '20px', color: '#08c' }}
                  />
                }></Button>
              <Button
                icon={
                  <InstagramFilled
                    style={{
                      fontSize: '20px',
                      background: '#e4405f',
                      color: '#fff',
                    }}
                  />
                }></Button>
            </Space>
            <Dropdown
              menu={{
                items,
                selectable: true,
                defaultSelectedKeys: ['3'],
              }}>
              <Space
                direction="horizontal"
                style={{ cursor: 'pointer' }}>
                <Space align="baseline">
                  <Avatar
                    style={{ backgroundColor: '#e76f51' }}
                    icon={
                      <motion.div
                        whileHover={{
                          rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
                          transition: { duration: 0.5 },
                        }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                        }}>
                        <UserOutlined
                          style={{
                            fontSize: '24px',
                            background: '#e76f51',
                            color: '#fff',
                          }}
                        />
                      </motion.div>
                    }
                  />
                </Space>
                <Space direction="vertical" size={0}>
                  <Text style={{ color: '#fff', fontSize: '14px' }}>
                    Account
                  </Text>

                  <Typography.Link
                    style={{ color: '#87d068', fontSize: '14px' }}>
                    <Space>
                      Login
                      <DownOutlined />
                    </Space>
                  </Typography.Link>
                </Space>
              </Space>
            </Dropdown>
          </Space>
        </div>

        <div className={styles.topBorder}></div>
      </div>
    </div>
  );
};

export default TopBar;

const items = [
  {
    key: '1',
    label: (
      <Button
        ghost
        style={{
          backgroundColor: '#191b2a',
          verticalAlign: 'middle',
        }}>
        <Space>
          <SvgGoogle />
          Google
        </Space>
      </Button>
    ),
  },
  {
    key: '2',
    label: (
      <Button
        ghost
        style={{
          backgroundColor: '#191b2a',
          verticalAlign: 'middle',
        }}>
        <Space>
          <GithubOutlined />
          Github
        </Space>
      </Button>
    ),
  },
];
