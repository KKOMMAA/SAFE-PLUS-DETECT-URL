import React from 'react';
import styled from 'styled-components';

import backIcon from '../../assets/icon/Ic_header_back.svg';
import { useNavigate } from 'react-router-dom';

export default function Header({ title, backto }) {
  // const navigate = useNavigate();
  return (
    <HeaderWrapper>
      {/* <img src={backIcon} alt="뒤로가기" onClick={() => navigate(backto)} /> */}
      <h1>{title}</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 6.8rem;

  position: relative;

  > img {
    position: absolute;
    margin-left: 3.6rem;
    top: 50%;
    transform: translate(0%, -50%);
  }

  > h1 {
    width: 7rem;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
