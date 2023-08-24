// 'use-client';
import {
  AppstoreOutlined,
  ContactsOutlined,
  HomeOutlined,
  RightSquareOutlined,
  ToolOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Segmented } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const { Header: Navbar } = Layout;
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [current, setCurrent] = useState('home');
  const router = useRouter();
  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

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
      <Link href="/" className="demo-logo">
        <Image
          src="/logo.svg"
          alt="Logo"
          width="180"
          height="60"
          style={{ fill: 'red', verticalAlign: 'middle' }}
        />
      </Link>
      {/* <Menu
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
      /> */}
      <Menu
        style={{
          justifyContent: 'flex-end',
        }}
        theme="dark"
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />

      <Link href={'/pc-builder'}>
        <Segmented
          style={{ marginRight: '30px', fontWeight: 'bold' }}
          size="small"
          options={[
            {
              value: 'List',
              icon: <ToolOutlined />,
            },
            {
              label: 'Build PC',
              value: 'Build PC',
              // icon: <AppstoreOutlined />,
            },
          ]}
        />
      </Link>
    </Navbar>
  );
};

export default Header;

const items = [
  {
    label: <Link href="/" rel="noopener noreferrer"></Link>,
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Category',
    key: 'category',
    icon: <AppstoreOutlined />,
    children: [
      {
        label: <Link href="/products/cpu">CPU / Processor</Link>,
        key: 'cpu',
        icon: <RightSquareOutlined />,
      },
      {
        label: <Link href="/products/motherboard">Motherboard</Link>,
        key: 'motherboard',
        icon: <RightSquareOutlined />,
      },
      {
        label: <Link href="/products/memory">RAM</Link>,
        key: 'ram',
        icon: <RightSquareOutlined />,
      },
      {
        label: (
          <Link href="/products/power-supply">Power Supply Unit</Link>
        ),
        key: 'psu',
        icon: <RightSquareOutlined />,
      },
      {
        label: (
          <Link href="/products/internal-storage">
            Storage Device
          </Link>
        ),
        key: 'storage',
        icon: <RightSquareOutlined />,
      },
      {
        label: <Link href="/products/monitor">Monitor</Link>,
        key: 'monitor',
        icon: <RightSquareOutlined />,
      },
      {
        label: <Link href="/products/others">Others</Link>,
        key: 'others',
        icon: <RightSquareOutlined />,
      },
    ],
  },
  {
    label: 'Contact Us',
    key: 'contact',
    icon: <ContactsOutlined />,
  },
];
