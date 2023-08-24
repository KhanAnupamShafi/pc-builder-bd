import Footer from '@components/Shared/Footer';
import Slider from '@components/UI/Slider';
import TopBar from '@components/UI/TopBar';
import { Layout } from 'antd';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const { Content } = Layout;

const RootLayout = ({ children }) => {
  const DynamicHeader = dynamic(
    () => import('@components/Shared/Header'),
    {
      loading: () => <p>Loading...</p>,
    }
  );
  const router = useRouter();

  const isPcBuilderPage = router.asPath === '/pc-builder';
  const isAddCategoryPage = router.route === '/add/[category]';
  const isCategoryPage = router.route === '/products/[category]';
  return (
    <>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}>
        <div className="main-container">
          <div className="flex-grow">
            <Layout>
              <TopBar />
              <DynamicHeader />

              {!(
                isPcBuilderPage ||
                isAddCategoryPage ||
                isCategoryPage
              ) && <Slider />}
              <Content>
                <div>{children}</div>
              </Content>
              <Footer />
            </Layout>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RootLayout;
