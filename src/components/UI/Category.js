import styles from '@styles/category.module.css';
import { Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const Category = () => {
  return (
    <div className={styles.listx5b}>
      <div
        style={{
          margin: 'auto',
          textAlign: 'center',
          padding: '50px 5px 10px',
        }}>
        <Space size={'middle'} align="center">
          <div
            style={{
              height: '40px',
              width: '40px',
              position: 'relative',
            }}>
            <Image
              style={{ objectFit: 'contain' }}
              src={'/images/case.png'}
              alt="case"
              layout="fill"
            />
          </div>
          <h1 style={{ color: '#f2f2f2' }}>Browse Category</h1>
        </Space>
      </div>
      <ul>
        <li>
          <Link href="/products/cpu/">
            <Image
              width={100}
              height={100}
              src="/images/nav-cpu.png"
              alt="category"
            />
            CPUs
          </Link>
        </li>
        <li>
          <Link href="/products/motherboard/">
            <Image
              width={100}
              height={100}
              src="/images/nav-motherboard.png"
              alt="category"
            />
            Motherboards
          </Link>
        </li>
        <li>
          <Link href="/products/memory/">
            <Image
              width={100}
              height={100}
              src="/images/nav-memory.png"
              alt="category"
            />
            Memory
          </Link>
        </li>
        <li>
          <Link href="/products/internal-storage/">
            <Image
              width={100}
              height={100}
              src="/images/nav-ssd.png"
              alt="category"
            />
            Storage
          </Link>
        </li>
        <li>
          <Link href="/products/monitor/">
            <Image
              width={100}
              height={100}
              src="/images/monitor.png"
              alt="category"
            />
            Monitor
          </Link>
        </li>
        <li>
          <Link href="/products/power-supply/">
            <Image
              width={100}
              height={100}
              src="/images/nav-powersupply.png"
              alt="category"
            />
            Power Supplies
          </Link>
        </li>
        <li>
          <Link href="/products/others/">
            <Image
              width={100}
              height={100}
              src="/images/nav-cpucooler.png"
              alt="category"
            />
            Others
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
