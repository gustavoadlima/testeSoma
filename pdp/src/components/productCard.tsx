import React, { useState } from 'react';
import { BuyButton, ProductImage, ProductName, Price, Id, ShelfCard, Installments } from '@/components/productStyles';
import { findMaxInstallments } from '@/components/productInstallments';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const skus = product.items.map((item: { Tamanho: any; }) => item.Tamanho);
  const { maxNumberOfInstallments, maxInstallmentValue } = findMaxInstallments(product);
  return (
    <ShelfCard className="product-card">
      <ProductImage src={product.items[0].images[0].imageUrl} alt={product.productName} />
      <Id>Código de referência: {product.productId}</Id>
      <ProductName>{product.productName}</ProductName>
      <Price>R$ {product.items[0].sellers[0].commertialOffer.Price.toFixed(2)}</Price>
      <Installments>ou em {maxNumberOfInstallments}x de R$ {maxInstallmentValue.toFixed(2)}</Installments>
      <BuyButton>Comprar</BuyButton>
    </ShelfCard>
  );
};

export default ProductCard;
