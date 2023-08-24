import myFont from '@lib/fontLoader';
import { ConfigProvider } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from 'src/redux/store';
import theme from 'src/theme/themeConfig';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((Page) => Page);
  return (
    <SessionProvider session={session}>
      <ConfigProvider theme={theme}>
        {getLayout(
          <Provider store={store}>
            <style jsx global>{`
              html {
                font-family: ${myFont.style.fontFamily};
              }
            `}</style>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Provider>
        )}
      </ConfigProvider>
    </SessionProvider>
  );
}
