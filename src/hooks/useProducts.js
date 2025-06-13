import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

function transform(product) {
  const status = product.is_new
    ? 'new'
    : product.is_popular
    ? 'popular'
    : product.is_on_sale
    ? 'sale'
    : '';
  return {
    id: product.id,
    name: product.title,
    img: product.image,
    images: [],
    sizes: product.sizes || [],
    colors: product.colors || [],
    mainPrice: product.price,
    oldPrice: product.discount === '0.00' ? '' : product.discount,
    status,
    is_new: product.is_new,
    is_popular: product.is_popular,
    is_on_sale: product.is_on_sale,
    desc: product.title,
  };
}

export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data.map(transform)))
      .catch((err) => console.error(err));
  }, []);

  return products;
}
