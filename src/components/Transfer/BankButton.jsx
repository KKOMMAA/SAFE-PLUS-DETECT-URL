import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function BankButton({ src, bankName }) {
  const navigate = useNavigate();
  return (
    <BankButtonWrapper>
      <img src={src} alt={bankName} onClick={() => navigate('/type-accountInfo')} />
      <p>{bankName}</p>
    </BankButtonWrapper>
  );
}

const BankButtonWrapper = styled.button`
  width: 9.2rem;
  height: 7.6rem;

  border-radius: 1.2rem;
  background: #fbfcfc;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  > p {
    position: absolute;
    bottom: 0;

    color: #000;
    font-size: 1.32rem;
    font-weight: 400;
  }
`;
