import Footer from '@components/Shared/Footer';
// import Header from '@components/Shared/Header';
import Slider from '@components/UI/Slider';
import TopBar from '@components/UI/TopBar';
import { Layout } from 'antd';
import dynamic from 'next/dynamic';
const { Content } = Layout;

const RootLayout = ({ children }) => {
  const DynamicHeader = dynamic(
    () => import('@components/Shared/Header'),
    {
      loading: () => <p>Loading...</p>,
    }
  );

  return (
    <>
      {/* <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}> */}
      <div className="main-container">
        <div className="flex-grow">
          <Layout>
            <TopBar />
            <DynamicHeader />

            <Slider />
            <Content
              className="site-layout"
              style={{ padding: '0 50px', height: '120vh' }}>
              <div>{children}</div>
            </Content>
            <Footer />
          </Layout>
        </div>
      </div>
      {/* </motion.div> */}
    </>
  );
};

export default RootLayout;
