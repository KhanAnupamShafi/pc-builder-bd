import { ConfigProvider } from 'antd';
import myFont from 'src/lib/fontLoader';
import theme from 'src/theme/themeConfig';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
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
          <Component {...pageProps} />
        </>
      )}
    </ConfigProvider>
  );
}
