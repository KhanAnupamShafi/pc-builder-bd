import { getProducts } from '@lib/fetchingProducts';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const data = await getProducts();
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  res.setHeader('Allow', ['GET']);
  res.status(425).end(`Method ${req.method} is not allowed`);
};

export default handler;
