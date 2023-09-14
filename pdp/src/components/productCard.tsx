import React, { useState } from 'react';
import { BuyButton, ProductImage, ProductName, Price, Id, ShelfCard, Installments } from '@/components/productStyles';
import { findMaxInstallments } from '@/components/productInstallments';
import SkuSelector from '@/components/skuSelector';
import PopupMessage from '@/components/popup'; 

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const skus = product.items.map((item: { Tamanho: any; }) => item.Tamanho);
  const { maxNumberOfInstallments, maxInstallmentValue } = findMaxInstallments(product);
  const [selectedSize, setSelectedSize] = useState<string | null>(skus[0]);
  const [showPopup, setShowPopup] = useState(false); 

  const handleBuyButtonClick = () => {
    if (selectedSize) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  };

  return (
    <ShelfCard className="product-card">
      <ProductImage src={product.items[0].images[0].imageUrl} alt={product.productName} />
      <Id>Código de referência: {product.productId}</Id>
      <ProductName>{product.productName}</ProductName>
      <SkuSelector
        skus={skus}
        onSelect={(sku) => {
          setSelectedSize(sku);
        }}
      />
      <Price>R$ {product.items[0].sellers[0].commertialOffer.Price.toFixed(2)}</Price>
      <Installments>ou em {maxNumberOfInstallments}x de R$ {maxInstallmentValue.toFixed(2)}</Installments>
      <BuyButton onClick={handleBuyButtonClick}>Comprar</BuyButton>
      {showPopup && <PopupMessage message={`Você adicionou ${product.productName} ${selectedSize} no carrinho`} />}
    </ShelfCard>
  );
};

export default ProductCard;
