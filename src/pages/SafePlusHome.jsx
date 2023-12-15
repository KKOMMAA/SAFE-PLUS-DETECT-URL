import React, { useEffect, useState } from 'react';
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
import { postCheckFroudAccount } from '../core/getCheckFroudAccount';

import safeIcon from '../assets/icon/Ic_detect_safe.svg';
import errorIcon from '../assets/icon/Ic_detect_error.svg';
import warnIcon from '../assets/icon/Ic_detect_warn.svg';

import checkIcon from '../assets/icon/Ic_detect_header.svg';
import { useNavigate } from 'react-router-dom';

export default function SafePlusHome() {
  const [isFraud, setIsFraud] = useState();
  const [detectCount, setDetectCount] = useState(0);
  const Text = '악성코드 위험이 ';

  const navigate = useNavigate();

  const handleCheckFraudAccount = async () => {
    const res = await postCheckFroudAccount('https://www.kebhana.com/');
    console.log(res);
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
        <section>
          <header>
            악성코드 위험이 &nbsp; <strong> {0}</strong>건 감지되었습니다.
            <img src={checkIcon} />
          </header>
          <article>
            <img src={safeIcon} />

            <h3>안전</h3>

            <p>안전한 계좌 송금을 실천하고 있네요!</p>

            <DetectResultWrapper>
              <p>
                총 <strong> 0</strong>개의{' '}
              </p>
              <p>
                <strong>안전 </strong> 결과가 있습니다.
              </p>
            </DetectResultWrapper>
          </article>
          <article>
            <img src={errorIcon} />

            <h3>위험</h3>
            <p>
              금융 사기를 당할 수 있습니다. <br />
              송금시 주의하세요
              <br />
              보호자에게 알림을 설정해도 좋을 것 같습니다
            </p>

            <DetectResultWrapper>
              <p>
                총 <strong>{detectCount}</strong>개의{' '}
              </p>
              <p>
                <strong>위험 </strong> 결과가 있습니다.
              </p>
            </DetectResultWrapper>
          </article>
          <article>
            <img src={warnIcon} />

            <h3>주의</h3>
            <p>
              불분명한 계좌에 송금내역이 많습니다 <br />
              송금시 주의하세요
            </p>
            <DetectResultWrapper>
              <p>
                총 <strong> 0</strong>개의{' '}
              </p>
              <p>
                <strong>주의 </strong> 결과가 있습니다.
              </p>
            </DetectResultWrapper>
          </article>
        </section>
        <button
          onClick={() => navigate('/safeplus-setting')}
          // onClick={() => handleCheckFraudAccount()}
        >
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
  overflow: hidden;

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
  > section {
    position: relative;

    > header {
      width: 27.1rem;
      height: 2.5rem;
      position: absolute;
      top: -1.4rem;

      display: flex;
      align-items: center;
      padding-left: 1.2rem;

      border-radius: 1.25rem;
      border: 2px solid #dd3645;
      background: #ffe08c;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;

      > img {
        position: absolute;
        right: 0;
      }

      color: #dd3645;
      font-size: 0.8rem;
      font-weight: 700;

      > strong {
        font-size: 1rem;
        font-weight: 700;
      }
    }

    width: 32.3rem;
    height: 19rem;
    margin-top: 2rem;
    padding-bottom: 1rem;
    gap: 1.3rem;

    border-radius: 1rem;
    border: 3px solid #c23536;
    background: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: flex-end;

    > article {
      display: flex;
      flex-direction: column;
      align-items: center;

      > h3 {
        margin-top: 0.9rem;
        margin-bottom: 0.5rem;
      }
      > p {
        text-align: center;
      }
    }

    > article:nth-of-type(1) {
      width: 8.8rem;
      height: 13.5rem;
      border-radius: 0.9rem;
      border: 1px solid #6b953a;
      background: #6b953a;

      > h3 {
        font-size: 0.8rem;
        font-weight: 600;
      }

      > p {
        font-size: 0.5rem;
        font-weight: 600;
      }

      color: #fff;
      text-align: center;
      font-size: 0.4rem;
      font-weight: 600;

      padding-top: 1.5rem;
    }

    > article:nth-of-type(2) {
      width: 9.9rem;
      height: 15.2rem;
      border-radius: 0.9rem;
      background: #dd3645;

      > h3 {
        font-size: 1rem;
        font-weight: 500;
        text-shadow: -0.7px 0 #fff, 0 0.7px #fff, 0.7px 0 #fff, 0 -0.7px #fff;
      }

      > p {
        font-size: 0.53rem;
        font-weight: 600;
        text-shadow: -0.5px 0 #fff, 0 0.5px #fff, 0.5px 0 #fff, 0 -0.5px #fff;
      }

      padding-top: 1.3rem;
    }

    > article:nth-of-type(3) {
      width: 8.8rem;
      height: 13.5rem;
      border-radius: 0.9rem;
      background: #f4c851;

      color: #fff;
      text-align: center;
      font-size: 0.4rem;
      font-weight: 600;

      padding-top: 1.5rem;

      > h3 {
        font-size: 0.8rem;
        font-weight: 600;
      }

      > p {
        font-size: 0.5rem;
        font-weight: 600;
        text-align: center;
      }
    }
  }
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

const DetectResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > p {
    color: #fff;
  }

  > p:nth-of-type(1) {
    font-size: 0.6rem;
    font-weight: 600;
    margin-top: 0.7rem;

    > strong {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  > p:nth-of-type(2) {
    font-size: 0.6rem;
    font-weight: 600;
    > strong {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }
`;
