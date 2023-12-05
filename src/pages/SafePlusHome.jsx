import React, { useEffect, useState } from 'react';
import settingIcon from '../assets/icon/Ic_homeMenu_setting.svg';
import styled from 'styled-components';
import Balance from '../components/common/Balance';
import Footer from '../components/common/Footer';
import leftSlide from '../assets/icon/Ic_home_balance_left.svg';
import rightSlide from '../assets/icon/Ic_home_balance_right.svg';

import myIcon from '../assets/icon/Ic_home_my.svg';
import nameIcon from '../assets/icon/Ic_home_name.svg';
import wholeAccountIcon from '../assets/icon/Ic_home_headerAccount.svg';

import walletIcon from '../assets/icon/Ic_home_wallet.svg';
import QRIcon from '../assets/icon/Ic_home_QR.svg';
import alarmIcon from '../assets/icon/Ic_home_alarm.svg';

import settingBtnIcon from '../assets/icon/Ic_detect_settung.svg';
import { getCheckFroudAccount } from '../core/getCheckFroudAccount';

export default function SafePlusHome() {
  const [isFraud, setIsFraud] = useState();

  const handleCheckFraudAccount = async fraudAccount => {
    const res = await getCheckFroudAccount();
  };

  return (
    <HomeWrapper>
      <TopWrapper>
        <div>
          <img src={myIcon} alt="my" />
          <img src={nameIcon} alt="이름" />
          <img src={wholeAccountIcon} alt="전체계좌" />
        </div>

        <div>
          <img src={walletIcon} alt="원큐지갑" />
          <img src={QRIcon} alt="QR" />
          <img src={alarmIcon} alt="알림" />
        </div>
      </TopWrapper>

      <DetectWrapper>
        <button>
          <img src={settingBtnIcon} />
          <p>safe+ 활성화 환경 설정하기</p>
        </button>

        <p>
          📣 버튼을 누르면 보호자 알림, safe+ 활성화 상태 선택, 활성화 계좌 선택 등을 <br />
          설정할 수 있습니다!
        </p>
      </DetectWrapper>

      <BalanceWrapper>
        <img src={leftSlide} alt="왼쪽 슬라이드" />
        <Balance />
        <img src={rightSlide} alt="오른쪽 슬라이드" />
      </BalanceWrapper>

      <Footer />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(180deg, #e4eaea 0%, #fbfcfc 100%);

  > p {
    align-self: flex-start;
    margin-top: 1.9rem;
    margin-left: 4.8rem;
    font-size: 1.32rem;
    font-weight: 400;
  }
`;

const TopWrapper = styled.header`
  display: flex;
  gap: 5.6rem;
  margin-top: 3.1rem;

  >div: nth-of-type(1) {
    >img: nth-of-type(2) {
      margin-left: 0.2rem;
      margin-right: 0.4rem;
    }
  }

  >div: nth-of-type(2) {
    display: flex;
    align-items: flex-start;
    >img: nth-of-type(2) {
      margin-left: 0.5rem;
      margin-right: 1rem;
    }
  }
`;

const DetectWrapper = styled.div`
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    margin-top: 0.8rem;
    margin-bottom: 0.7rem;

    width: 32.2rem;
    height: 3.7rem;

    border-radius: 1.25rem;
    background: linear-gradient(180deg, #c63f3c 0%, #f2aa9e 100%);

    > p {
      color: #191919;
      font-size: 1.3rem;
      font-weight: 600;
    }
  }

  > p {
    color: #000;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
  }
`;

const BalanceWrapper = styled.main`
  display: flex;
  gap: 2.5rem;
`;

const MenuWrapper = styled.section`
  width: 24rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 1.2rem 3.9rem;
  margin-top: 1.6rem;
  margin-bottom: 2.2rem;
`;
