import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchRequest() {
      const response = await axios(API);
      setProducts(response.data);
    }

    fetchRequest();
  }, [API]);

  return products;
};

export default useGetProducts;
