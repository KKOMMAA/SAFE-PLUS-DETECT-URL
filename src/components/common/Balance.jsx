import React from 'react';
import styled from 'styled-components';
import limitAccountIcon from '../../assets/icon/Ic_limit_account.svg';
import copyIcon from '../../assets/icon/Ic_copy.svg';
import moreIcon from '../../assets/icon/Ic_more.svg';
import hideIcon from '../../assets/icon/Ic_hide.svg';
import splitIcon from '../../assets/icon/ic_balance_menu_split.svg';
import { useNavigate } from 'react-router-dom';

export default function Balance() {
  const navigate = useNavigate();
  return (
    <BalanceWrapper>
      <TopInfoWrapper>
        <div>
          <h2>저축예금</h2>
          <img src={limitAccountIcon} alt="한도계좌" />
        </div>

        <div>
          <p>입출금 123-456789-01234</p>
          <img src={copyIcon} alt="계좌 복사" />
        </div>
      </TopInfoWrapper>

      <img src={moreIcon} alt="더보기" />

      <BalanceInfoWrapper>
        <p>
          <strong>0</strong>원
        </p>
        <img src={hideIcon} alt="숨김" />
      </BalanceInfoWrapper>

      <BottomInfoWrapper>
        <button>가져오기</button>
        <img src={splitIcon} alt="메뉴구분" />
        <button onClick={() => navigate('/transfer')}>보내기 </button>
      </BottomInfoWrapper>
    </BalanceWrapper>
  );
}

const BalanceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1.7rem;
  margin-bottom: 2rem;

  position: absolute;
  bottom: 0;

  width: 27.5rem;
  height: 22.7rem;
  position: relative;

  border-radius: 1.2rem;
  background: #fff;

  > img {
    position: absolute;
    right: 2.1rem;
    top: 1.6rem;
  }
`;

const TopInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-left: 3.5rem;
  margin-top: 2.7rem;

  > div {
    display: flex;
    gap: 0.3rem;
    align-items: center;

    font-size: 1.2rem;

    > h2 {
      font-weight: 600;
    }

    > p {
      color: #7c7c7c;
      font-weight: 400;
    }
  }
`;

const BalanceInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 0.4rem;
  color: #333;

  height: 11.2rem;
  width: 20.6rem;
  border-bottom: 0.1rem solid #d7dbdc;

  > p {
    font-size: 1.4rem;
    font-weight: 300;

    > strong {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

const BottomInfoWrapper = styled.div`
  display: flex;
  align-self: center;

  > button {
    width: 4.8rem;
    height: 1.5rem;
    margin: 2rem 0rem;
    color: #008480;

    font-size: 1.3rem;
    font-weight: 700;

    background: transparent;
  }

  > img {
    margin: 2.2rem 4.6rem 2.2rem 3.6rem;
  }
`;
