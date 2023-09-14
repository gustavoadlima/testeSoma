import React, { useState } from 'react';
import { BuyButton, ProductImage, ProductName, Price, Id, ShelfCard } from '@/components/productStyles';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const skus = product.items.map((item: { Tamanho: any; }) => item.Tamanho);
  return (
    <ShelfCard className="product-card">
      <ProductImage src={product.items[0].images[0].imageUrl} alt={product.productName} />
      <Id>Código de referência: {product.productId}</Id>
      <ProductName>{product.productName}</ProductName>
      <Price>R$ {product.items[0].sellers[0].commertialOffer.Price.toFixed(2)}</Price>
      <BuyButton>Comprar</BuyButton>
    </ShelfCard>
  );
};

export default ProductCard;
