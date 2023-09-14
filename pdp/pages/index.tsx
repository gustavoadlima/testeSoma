"use client"

import '@/app/globals.css'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchAllProducts } from '@/components/api';
import ProductList from '@/components/productList';
import Pagination from '@/components/pagination';


const PageContainer = styled.div`
  position: relative;
  max-width: 92%;
  margin: auto;
  padding: 48px 0;;
`;

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);



  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToDisplay = products.slice(startIndex, endIndex);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };



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
      <ProductList products={productsToDisplay} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};

export default ProductsPage;
