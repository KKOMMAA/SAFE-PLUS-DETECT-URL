import React, { useState } from 'react';
import styled from 'styled-components';

import sadIcon from '../../assets/icon/Ic_fake_sad.svg';
import spinner from '../../assets/icon/spinner.gif';
import { useNavigate } from 'react-router-dom';

export default function FakeAccountModal() {
  const [isSpinner, setIsSpinner] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsSpinner(true);
    setTimeout(() => {
      setIsSpinner(false);
      navigate('/finished');
    }, 1500);
  };
  return !isSpinner ? (
    <StModalWrapper>
      <FakeAccountModalWrapper>
        <img src={sadIcon} />

        <h2>
          <strong>사기이력</strong>이 <strong>있는</strong> 계좌입니다
        </h2>

        <h3>그래도 송금하시겠습니까?</h3>
        <h4>송금시, 보호자에게 자동으로 연락이 전송됩니다</h4>

        <ButtonWrapper>
          <button type="button">송금취소하기</button>
          <button type="button" onClick={() => handleSubmit()}>
            송금하기
          </button>
        </ButtonWrapper>
      </FakeAccountModalWrapper>
    </StModalWrapper>
  ) : (
    <StModalWrapper>
      <img src={spinner} />
    </StModalWrapper>
  );
}

const StModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 100000;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);

  z-index: 10000;

  > img {
    width: 9rem;
    height: 7.5rem;
  }
`;

const FakeAccountModalWrapper = styled.dialog`
  width: 35.5rem;
  height: 25.774rem;
  padding-top: 2.8rem;
  padding-bottom: 2.1rem;

  border-radius: 2.1rem;
  background: #f5f5f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    margin-top: 0.6rem;
    font-size: 2.4rem;
    font-weight: 500;

    > strong {
      color: #da2d48;
    }
  }

  > h3 {
    margin-top: 1rem;
    color: #4a4a4a;

    font-size: 1.8rem;
    font-weight: 600;
  }
  > h4 {
    margin-bottom: 2.6rem;
    color: #4a4a4a;
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.81rem;

  > button {
    width: 15.3995rem;
    height: 4.9441rem;
    border-radius: 0.9rem;
    font-size: 1.9rem;
    font-weight: 600;
  }

  > button:nth-of-type(1) {
    color: #fff;
    background: #da2d48;
  }

  > buttom:nth-of-type(2) {
    background: #dfe3eb;
    color: #272727;
  }
`;
