import { ConfigProvider } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import myFont from 'src/lib/fontLoader';
import theme from 'src/theme/themeConfig';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((Page) => Page);
  return (
    <ConfigProvider theme={theme}>
      {getLayout(
        <>
          <style jsx global>{`
            html {
              font-family: ${myFont.style.fontFamily};
            }
          `}</style>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </>
      )}
    </ConfigProvider>
  );
}
