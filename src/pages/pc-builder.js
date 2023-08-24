import { DeleteFilled } from '@ant-design/icons';
import RootLayout from '@components/Layout/RootLayout';
import { removeFromBuilder } from '@redux/features/pcPartsSlice';
import { Button, Space, Table, Tag, Typography, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const PcBuilderPage = () => {
  const pcParts = useSelector((state) => state.pcParts);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const handleDelete = (id) => {
    console.log(id, 'aaa');
    if (id) {
      dispatch(removeFromBuilder(id));
    }
  };
  const info = () => {
    messageApi.info('Congrats, You did it!');
  };

  // Initial empty data structure for each category
  const emptyCategoryData = {
    _id: undefined,
    name: undefined,
    image: undefined,
    price: undefined,
    type: undefined,
    rating: undefined,
    stock: undefined,
    category: undefined,
  };

  const categoryLabelMap = {
    'CPU / Processor': 'cpu',
    Motherboard: 'motherboard',
    RAM: 'memory',
    'Power Supply Unit': 'power-supply',
    'Storage Device': 'internal-storage',
    Monitor: 'monitor',
    Other: 'others',
  };

  const categoryNames = Object.keys(categoryLabelMap);

  // Initialize the data array with empty data structures for each category
  let data = categoryNames.map((category) => ({
    ...emptyCategoryData,
    category,
  }));

  // Merge the empty data array with actual data from pcParts
  pcParts.forEach((selectedPart) => {
    const index = categoryNames.indexOf(selectedPart.category);
    if (index !== -1) {
      data[index] = { ...data[index], ...selectedPart };
    }
  });

  const columns = [
    {
      title: 'Category',
      dataIndex: 'key',
      rowScope: 'row',
      align: 'right',
      render: (_, record, index) => (
        <span>
          {(
            <Space size="middle">
              <Link
                href={`/add/${
                  categoryLabelMap[categoryNames[index]]
                }`}>
                Choose a
                <Button style={{ marginLeft: 5 }} type="primary">
                  {categoryNames[index]}
                </Button>
              </Link>
            </Space>
          ) || 'Unknown Category'}
        </span>
      ),
    },

    {
      title: 'Product Photo',
      dataIndex: 'image',
      key: 'image',
      render: (image) =>
        image !== undefined && (
          <Image
            height={80}
            width={90}
            src={image}
            alt="h9-flow-hero-white"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmPi/HgAEOgIRSYtutwAAAABJRU5ErkJggg==)"
          />
        ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link href={`/product/${record._id}`}>{text}</Link>
      ),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => price !== undefined && <a>${price}</a>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },

    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Availability',
      key: 'stock',
      dataIndex: 'stock',
      render: (_, { stock }) => (
        <Tag color={!stock ? 'red' : 'green'} key={stock}>
          {stock === undefined
            ? ' '
            : stock == true
            ? 'In-stock'
            : 'Out of Stock'}
        </Tag>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record._id)}>
            <DeleteFilled /> Delete
          </a>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ position: 'relative', marginTop: '65px' }}>
      {contextHolder}
      <div
        style={{
          maxWidth: '1460px',
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
          padding: '10px',
        }}>
        <Table
          scroll={true}
          bordered={true}
          columns={columns}
          dataSource={data}
          rowKey="_id"
          caption={
            <Space
              size={'middle'}
              align=""
              wrap
              style={{
                padding: '15px',
                display: 'flex',
                justifyContent: 'space-between',
              }}>
              <h1>
                Choose Your Core Component{' '}
                <Typography.Text type="secondary">
                  ({Math.max(0, 6 - pcParts.length)}
                  &nbsp;remaining)
                </Typography.Text>
              </h1>
              <Button
                onClick={info}
                type="primary"
                disabled={pcParts.length < 6}>
                Complete Build
              </Button>
            </Space>
          }
        />
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = (Page) => {
  return <RootLayout>{Page}</RootLayout>;
};
