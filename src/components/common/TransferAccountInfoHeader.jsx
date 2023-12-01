import React from 'react';
import styled from 'styled-components';

import backIcon from '../../assets/icon/Ic_header_back.svg';
import basicIcon from '../../assets/icon/Ic_transfer_basic.svg';
import { useNavigate } from 'react-router-dom';

export default function TransferAccountInfoHeader({ backto }) {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <img src={backIcon} alt="뒤로가기" onClick={() => navigate(backto)} />
      <img src={basicIcon} alt="기본" />
      <h1>받는 분 직접 입력</h1>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  height: 6.8rem;

  position: relative;

  >img: nth-of-type(1) {
    position: absolute;
    margin-left: 3.6rem;
    top: 50%;
    transform: translate(0%, -50%);
  }

  >img: nth-of-type(2) {
    position: absolute;
    margin-left: 1.7rem;
    top: 50%;
    transform: translate(100%, -50%);
  }

  >img: nth-of-type(3) {
    position: absolute;
    top: 50%;
    right: 13%;
    transform: translate(0%, -50%);
  }

  >img: nth-of-type(4) {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(0%, -50%);
  }

  > h1 {
    width: 13rem;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
