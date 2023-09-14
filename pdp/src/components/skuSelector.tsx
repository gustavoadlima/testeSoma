"use client"

import React, { useState } from 'react';
import styled from 'styled-components';

const SkuSelectorWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkuOption = styled.div`
  display: inline-block;
  margin: 5px;
  border: 1px solid var(--cor-1);
  border-radius: 50%;
  min-width: 38px;
  height: 38px;
  padding: 4px;
  text-align: center;
  line-height: 30px;
  color: var(--cor-1);
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    background-color: var(--cor-1);
    color: var(--branco);
  `}
`;

const SkuInput = styled.input`
  display: none;
`;

interface SkuSelectorProps {
  skus: string[];
  onSelect: (sku: string) => void;
}

const SkuSelector: React.FC<SkuSelectorProps> = ({ skus, onSelect }) => {
  const [selectedSku, setSelectedSku] = useState(skus[0]);

  const handleSkuSelect = (sku: string) => {
    setSelectedSku(sku);
    if (typeof onSelect === 'function') {
      onSelect(sku);
    }
  };

  return (
    <div>
      <SkuSelectorWrapper>
        {skus.map((sku) => (
          <SkuOption
            key={sku}
            selected={selectedSku === sku}
            onClick={() => handleSkuSelect(sku)}
          >
            <SkuInput
              type="radio"
              id={sku}
              name="sku"
              value={sku}
              checked={selectedSku === sku}
              onChange={() => handleSkuSelect(sku)}
            />
            {sku}
          </SkuOption>
        ))}
      </SkuSelectorWrapper>
    </div>
  );
};

export default SkuSelector;
