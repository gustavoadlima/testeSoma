"use client"

import React from 'react';
import ProductCard from '@/components/productCard';
import styled from 'styled-components';

export const Gallery = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 32px;
    @media (min-width: 768px) {
      row-gap: 52px;
    }
`

interface ProductListProps {
  products: any[];
}

const ProductList: React.FC<ProductListProps> = ({ products}) => {
  return (
    <Gallery>
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </Gallery>
  );
};

export default ProductList;
