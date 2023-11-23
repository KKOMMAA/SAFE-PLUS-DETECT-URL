import React from 'react';
import accountIcon from '../assets/icon/Ic_homeMenu_account.svg';
import youngHanaIcon from '../assets/icon/Ic_homeMenu_Younghana.svg';
import eventIcon from '../assets/icon/Ic_homeMenu_event.svg';
import stockIcon from '../assets/icon/Ic_homeMenu_stock.svg';
import fundIcon from '../assets/icon/Ic_homeMenu_fund.svg';
import settingIcon from '../assets/icon/Ic_homeMenu_setting.svg';
import styled from 'styled-components';
import Balance from '../components/common/Balance';
import Footer from '../components/common/Footer';
import divisionLine from '../assets/icon/Ic_home_division.svg';
import HomeMenu from '../components/common/HomeMenu';
import leftSlide from '../assets/icon/Ic_home_balance_left.svg';
import rightSlide from '../assets/icon/Ic_home_balance_right.svg';

import myIcon from '../assets/icon/Ic_home_my.svg';
import nameIcon from '../assets/icon/Ic_home_name.svg';
import wholeAccountIcon from '../assets/icon/Ic_home_headerAccount.svg';

import walletIcon from '../assets/icon/Ic_home_wallet.svg';
import QRIcon from '../assets/icon/Ic_home_QR.svg';
import alarmIcon from '../assets/icon/Ic_home_alarm.svg';
import adIcon from '../assets/icon/Ic_home_ad.svg';

export default function Home() {
  const MenuIconSrcs = [accountIcon, youngHanaIcon, eventIcon, stockIcon, fundIcon, settingIcon];
  const MenuIconDecs = ['전체계좌', '영하나', '이벤트', '주식추천', '펀드', '맞춤설정'];

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
      <p>금융자산을 보호해주는 safe+</p>

      <BalanceWrapper>
        <img src={leftSlide} alt="왼쪽 슬라이드" />
        <Balance />
        <img src={rightSlide} alt="오른쪽 슬라이드" />
      </BalanceWrapper>

      <img src={divisionLine} alt="구분선" />

      <MenuWrapper>
        {MenuIconSrcs.map((src, index) => (
          <HomeMenu src={src} desc={MenuIconDecs[index]} key={index} />
        ))}
      </MenuWrapper>

      <img src={adIcon} alt="광고" />

      <Footer />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
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
