import React from 'react';

interface Product {
  productId: number;
  productName: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.productId}>{product.productName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
