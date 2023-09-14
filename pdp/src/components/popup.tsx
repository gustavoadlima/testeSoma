"use client"

import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  bottom: 12px;
  left: 12px;
  background-color: var(--branco);
  border: 1px solid var(--cor-1);
  padding: 16px;
  z-index: 999;
  filter: drop-shadow(5px 5px 10px #000000);
  color: var(--cor-1);
`;

interface PopupMessageProps {
  message: string;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ message }) => {
  return (
    <PopupContainer>
      {message}
    </PopupContainer>
  );
};

export default PopupMessage;
