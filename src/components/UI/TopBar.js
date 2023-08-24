import {
  DownOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  UserOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import SvgGoogle from '@assets/svg/Google';
import styles from '@styles/slider.module.css';
import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd';
import { motion } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const { Text } = Typography;

const TopBar = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className={styles.topContainer}>
      <div className={styles.topBar}>
        <div className={styles.topContent}>
          <>
            <Row justify="center" align="middle">
              <Col flex={1}>
                <Row justify="center">
                  <Col span={12}>
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
                  </Col>
                </Row>
              </Col>
              <Col flex={1}>
                <Row justify="end">
                  <Col span={12}>
                    {session?.user ? (
                      <Space
                        direction="horizontal"
                        style={{ cursor: 'pointer' }}>
                        <Space align="baseline">
                          <Avatar
                            src={
                              <Image
                                width={40}
                                height={40}
                                src={session.user?.image}
                                alt="avatar"
                              />
                            }
                            style={{ backgroundColor: '#e76f51' }}
                            icon={
                              <motion.div
                                whileHover={{
                                  rotateZ: [
                                    0, -20, 20, -20, 20, -20, 20, 0,
                                  ],
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
                          <Text
                            style={{
                              color: '#fff',
                              fontSize: '14px',
                            }}>
                            Account
                          </Text>

                          <Typography.Link
                            onClick={() => signOut()}
                            style={{
                              color: '#d06868',
                              fontSize: '14px',
                            }}>
                            <Space>Log out</Space>
                          </Typography.Link>
                        </Space>
                      </Space>
                    ) : (
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
                                    rotateZ: [
                                      0, -20, 20, -20, 20, -20, 20, 0,
                                    ],
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
                            <Text
                              style={{
                                color: '#fff',
                                fontSize: '14px',
                              }}>
                              Account
                            </Text>

                            <Typography.Link
                              style={{
                                color: '#87d068',
                                fontSize: '14px',
                              }}>
                              <Space>
                                Login
                                <DownOutlined />
                              </Space>
                            </Typography.Link>
                          </Space>
                        </Space>
                      </Dropdown>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
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
        onClick={() => signIn('google')}
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
        onClick={() => signIn('github')}
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
