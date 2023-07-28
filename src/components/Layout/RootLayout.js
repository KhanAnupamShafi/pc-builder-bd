import Footer from '@components/Shared/Footer';
import Header from '@components/Shared/Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <div className="flex-grow">
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
