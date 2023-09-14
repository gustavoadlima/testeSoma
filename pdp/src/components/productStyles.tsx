"use client"

import styled from 'styled-components';

export const BuyButton = styled.button`
    padding: 0;
    width: 100%;
    font-size: 16px;
    text-align: center;
    text-transform: capitalize;
    color: var(--cor-1);
    background-color: var(--branco);
    border: 1px solid var(--cor-1);
    cursor: pointer;
    max-width: 100%;
    height: 48px;
    line-height: 48px;

  &:hover{
    background-color: var(--cor-1);
    color: var(--cor-2);
  }
`;
export const ProductImage = styled.img`
    max-width: 300px;
    width: 100%;
    @media (min-width: 768px) {
        max-width: 400px;
    }
`
export const ProductName = styled.h4`
    font-size: 16px;
    font-weight: 700;
    display: block;
    margin: 0 auto;
    text-align: center;
    color: var(--cor-1);
    font-family: inherit;
`
export const Price = styled.p`
    text-align: center;
    color: var(--cor-3);
    font-family: inherit;
    font-weight: 700;
`
export const ShelfCard = styled.div`
    max-width: 300px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (min-width: 768px) {
        max-width: 400px;
        min-height: 800px;
    }
`

export const Id = styled.p`
    font-size: 12px;
    font-weight: 300;
    display: block;
    margin: 0 auto;
    text-align: center;
`
export const Installments = styled.p`
    text-align: center;
    color: var(--cor-1);
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
`