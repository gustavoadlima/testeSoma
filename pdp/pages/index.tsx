import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchAllProducts } from '@/components/api';
import ProductList from '@/components/productList';


const PageContainer = styled.div`
  position: relative;
`;

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageContainer>
      <ProductList products={products} />
    </PageContainer>
  );
};

export default ProductsPage;
