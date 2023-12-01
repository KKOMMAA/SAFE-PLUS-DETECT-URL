import React from 'react';
import styled from 'styled-components';

import ServiceSelectedIcon from '../../assets/icon/Ic_service_selected.svg';
import ServiceUnSelectedIcon from '../../assets/icon/Ic_service_unSelected.svg';

export default function ServiceBox({ desc, isSelected }) {
  return (
    <ServiceBoxWrapper>
      <p>{desc}</p>
      {isSelected ? (
        <img src={ServiceSelectedIcon} alt="선택된서비스" />
      ) : (
        <img src={ServiceUnSelectedIcon} alt="선택안된서비스" />
      )}
    </ServiceBoxWrapper>
  );
}

const ServiceBoxWrapper = styled.div`
  width: 15.2rem;
  height: 5.5rem;

  border-radius: 1.5rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  padding: 2rem 2rem 1.9rem 1.8rem;

  display: flex;

  align-items: center;

  gap: 4rem;

  > p {
    width: 6rem;
    color: #393939;

    font-size: 1.4rem;
    font-weight: 500;
  }

  > img {
    /* margin-right: 2rem; */
  }
`;
