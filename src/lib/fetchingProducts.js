import { ObjectId } from 'mongodb';
import clientPromise from './mongodb';

let client;
let db;
let products;

async function init() {
  if (db) return; // preventing multiple connection attempts.

  try {
    client = await clientPromise;
    db = await client.db();
    products = await db.collection('pc-components');
  } catch (error) {
    throw new Error('Failed to established connection to Database');
  }
}

// The IIFE (async immediately invoked function expression) is used to invoke the init() function as soon as the module is loaded. This ensures that the connection to the MongoDB server is established early on when the application starts.
(async () => {
  await init();
})();

export async function getProducts(productId) {
  try {
    if (!products) await init();
    // If productId is provided, fetch a single product by its ID
    if (productId) {
      const result = await products.findOne({
        _id: new ObjectId(productId),
      });
      return result;
    }

    const result = await products.find({}).limit(6).toArray();
    return result;
  } catch (error) {
    console.error('Error in getProducts:', error);
    return { error: 'Failed to retrieve products' };
  }
}

const categoryMappings = {
  cpu: 'CPU / Processor',
  motherboard: 'Motherboard',
  memory: 'RAM',
  'power-supply': 'Power Supply Unit',
  'internal-storage': 'Storage Device',
  monitor: 'Monitor',
  others: 'Other',
};

export async function getProductsByCategory(category) {
  try {
    if (!products) await init();
    if (category) {
      const actualCategory = categoryMappings[category];
      const result = await products
        .find({
          category: actualCategory,
        })
        .toArray();
      return result;
    }
  } catch (error) {
    console.error('Error in getProductsByCategory:', error);
    return { error: 'Failed to retrieve products' };
  }
}
