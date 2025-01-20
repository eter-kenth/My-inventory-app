import { useState, useEffect } from 'react';
import mockData from '../utils/mockData.json'; // importamos el json q cambiamos 

function useProductSearch(query) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Filtramos los productos según la query
    const filteredProducts = mockData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  }, [query]);

  return products;
}

export default useProductSearch;

