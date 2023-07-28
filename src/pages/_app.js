import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((Page) => Page);
  return getLayout(<Component {...pageProps} />);
}
