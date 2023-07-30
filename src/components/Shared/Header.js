import { Layout, Menu, Segmented } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const { Header: Navbar } = Layout;
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 55) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={isSticky ? 'navbar fixed' : 'navbar'}
      style={{
        padding: '0 0 0 55px',
        zIndex: 100,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease',
        transform: isSticky ? 'translateY(0%)' : 'translateY(80%)',
        backdropFilter: isSticky && 'blur(2px)',
        background: !isSticky ? '#001529' : 'rgba(0, 21, 41, 0.9)',
        boxShadow: !isSticky
          ? '0 2px 4px rgba(0, 0, 0, 0.1)'
          : '0 4px 30px rgba(0, 0, 0, 0.1)',
      }}>
      <div className="demo-logo">
        <Image
          src="/logo.svg"
          alt="Logo"
          width="180"
          height="60"
          style={{ fill: 'red', verticalAlign: 'middle' }}
        />
      </div>
      <Segmented
        options={[
          {
            label: 'List',
            value: 'List',
            // icon: <BarsOutlined />,
          },
          {
            label: 'Kanban',
            value: 'Kanban',
            // icon: <AppstoreOutlined />,
          },
        ]}
      />

      <Menu
        style={{
          justifyContent: 'flex-end',
        }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: `nav ${index + 1}`,
        }))}
      />
    </Navbar>
  );
};

export default Header;
