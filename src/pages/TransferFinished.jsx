import React from 'react';
import TransferHeader from '../components/common/TransferHeader';

import logoIcon from '../assets/icon/Ic_logo_safeplus.svg';
import warnIcon from '../assets/icon/Ic_transferFinished_warn.svg';

import etcIcon from '../assets/icon/Ic_finished_etc.svg';
import dividingIcon from '../assets/icon/Ic_settings_dividingLine.svg';
import openIcon from '../assets/icon/Ic_finished_open.svg';
import snsIcon from '../assets/icon/Ic_finished_sns.svg';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { sendMoney } from '../core/atom';
import { useRecoilValue } from 'recoil';

export default function TransferFinished() {
  const navigate = useNavigate();
  const sendingMoney = useRecoilValue(sendMoney);
  return (
    <TransferFinishedWrapper>
      <TransferHeader backto="/how-much" />

      <img src={logoIcon} alt="로고" />
      <img src={warnIcon} alt="경고" />

      <FinishedArea>
        <strong>하나은행 나사기</strong>님꼐 <br />
        <strong>{sendingMoney}</strong>원이 이체되었습니다.
      </FinishedArea>

      <img src={etcIcon} alt="기타" />
      <img src={dividingIcon} alt="구분선" />

      <img src={openIcon} alt="펼치기" />

      <img src={snsIcon} alt="sns" />
      <CheckButton onClick={() => navigate('/')}>확인</CheckButton>
    </TransferFinishedWrapper>
  );
}

const TransferFinishedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  >img: nth-of-type(1) {
    width: 3.1rem;
    height: 3.2rem;

    margin-bottom: 1.4rem;
  }

  >img: nth-of-type(2) {
    width: 23.9rem;
    height: 2.5rem;
  }

  >img: nth-of-type(3) {
    width: 22.4rem;
    height: 2.8rem;

    margin-top: 6.2rem;
    margin-bottom: 1.6rem;
  }

  >img: nth-of-type(4) {
    margin-bottom: 1.4rem;
  }

  >img: nth-of-type(5) {
    margin-bottom: 12.5rem;
  }
`;

const FinishedArea = styled.div`
  color: #7f7f7f;
  font-size: 1.9rem;
  font-weight: 700;

  margin-top: 2.5rem;

  > strong {
    color: #282828;
    font-size: 1.9rem;
    font-weight: 700;
  }
`;

const CheckButton = styled.button`
  width: 33rem;
  height: 4.5rem;
  position: absolute;
  bottom: 3.5rem;

  border-radius: 2.55rem;
  background: #009491;

  color: #fff;
  font-size: 1.7rem;
  font-weight: 500;
`;
