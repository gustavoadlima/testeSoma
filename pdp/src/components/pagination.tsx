"use client"

import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 48px
`;

const PageButton = styled.button`
  width: 38px;
  height: 38px;
  border: 1px solid var(--cor-1);
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'var(--cor-1)' : 'transparent')};
  color: ${({ active }) => (active ? 'var(--branco)' : 'var(--cor-1)')};
  cursor: pointer;
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          onClick={() => handlePageChange(index + 1)}
          active={currentPage === index + 1}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
