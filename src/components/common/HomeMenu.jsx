import React from 'react';
import styled from 'styled-components';

export default function HomeMenu({ src, desc }) {
  return (
    <MenuContainer>
      <MenuWrapper>
        <img src={src} />
      </MenuWrapper>

      <MenuDesc>{desc}</MenuDesc>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.3rem;
  height: 5.1rem;

  border-radius: 1.4rem;
  background: #f9f9fa;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.13);
`;

const MenuDesc = styled.p`
  margin-top: 0.6rem;

  color: #393939;

  font-size: 1.15rem;
  font-weight: 600;
`;
