import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import transformProduct from '../utils/transformProduct';

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data.map(transformProduct)))
      .catch((err) => console.error(err));
  }, []);

  return products;
}
