import React, { useState } from 'react';
import TransferHeader from '../components/common/TransferHeader';
import styled from 'styled-components';

import accountInfoIcon from '../assets/icon/Ic_transfer_accountInfo.svg';
import sendByPhoneNumIcon from '../assets/icon/Ic_transfer_sendByPhoneNum.svg';
import { getKorAmountString } from '../utils/currencyChange';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { sendAccount, sendMoney, sendingName } from '../core/atom';

import sendingNameCheck from '../assets/icon/Ic.transfer_sendingName.svg';
import FakeAccountModal from '../components/common/FakeAccountModal';

export default function TransferHowMuch() {
  const [isTyping, setIsTyping] = useState(false);
  const [transferMoney, setTransferMoney] = useState();
  const [changedValue, setChangedValue] = useState('');
  const [sendName, setSendName] = useState('');
  const setSendingMoney = useSetRecoilState(sendMoney);
  const setSendingName = useSetRecoilState(sendingName);

  const [isModalUp, setIsModalUp] = useState(false);

  const handleSubmit = () => {
    if (sendName.length || transferMoney !== null || undefined) {
      setSendingMoney(transferMoney);
      setSendingName(sendName);
      setIsModalUp(true);
    }
  };

  const formatNumber = value => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleChange = e => {
    const value = e.target.value.replace(/,/g, '');
    setTransferMoney(value);
    setChangedValue(formatNumber(value));
  };

  const handleChangeName = e => {
    setSendName(e.target.value);
  };

  const sendingAccount = useRecoilValue(sendAccount);
  return (
    <TransferAccountWrapper>
      <TransferHeader backto="/type-accountInfo" />
      <img src={accountInfoIcon} alt="계좌정보" />

      <article>
        <p>나사기</p>
        <p>하나 {sendingAccount}</p>
      </article>

      <img src={sendByPhoneNumIcon} alt="계좌정보" />
      {isTyping ? (
        <TypingArea>
          <input
            placeholder="금액을 입력해주세요"
            value={changedValue}
            onChange={e => handleChange(e)}
          />
        </TypingArea>
      ) : (
        <h1 onClick={() => setIsTyping(true)}>얼마를 보낼까요?</h1>
      )}

      <pre>오늘 이체한도 10,000,000원</pre>

      <img src={sendingNameCheck} alt="직접 입력" />
      <input placeholder="표시될 송신자 이름을 입력하세요" onChange={e => handleChangeName(e)} />

      <NextButton
        isActive={!(sendName.length <= 0 || transferMoney == null || undefined)}
        onClick={() => handleSubmit()}
      >
        다음
      </NextButton>
      {isModalUp && <FakeAccountModal />}
    </TransferAccountWrapper>
  );
}

const TransferAccountWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  background-color: #f9f9fb;

  > article {
    margin-top: 1.7rem;
    padding-left: 3.4rem;
    width: 28.9rem;
    height: 5.2rem;

    border-radius: 0.6rem;
    border: 2px solid #dddee4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    > p:nth-of-type(1) {
      font-size: 1.35rem;
      font-weight: 500;
    }

    > p:nth-of-type(2) {
      color: #676767;
      font-size: 1.2rem;
      font-weight: 300;
    }
  }

  > img {
    margin-top: 1.5rem;
  }

  >img: nth-of-type(2) {
    align-self: flex-end;
    margin-right: 4.5rem;
    margin-top: 1.2rem;
  }

  >img: nth-of-type(3) {
    margin-top: 5rem;
  }

  > input {
    width: 28.9rem;
    height: 5.2rem;
    border-radius: 0.6rem;
    border: 2px solid #dddee4;

    margin-top: 1.2rem;

    padding-left: 1rem;

    font-size: 2rem;
  }

  > h1 {
    width: 20rem;
    height: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    font-weight: 400;

    > strong {
      font-weight: 600;
    }
  }

  > pre {
    align-self: flex-end;
    margin-top: 3rem;
    margin-right: 6.5rem;
    color: #666;
    font-size: 1.34rem;
    font-weight: 400;
  }
`;

const NextButton = styled.button`
  width: 33rem;
  height: 4.5rem;
  position: absolute;
  bottom: 3.5rem;

  border-radius: 2.55rem;
  background: #dbdbdb;

  color: #888;
  font-size: 1.9rem;
  font-weight: 500;

  color: ${props => (props.isActive ? '#fff' : '#888')};

  background-color: ${props => (props.isActive ? '#009491' : '#DBDBDB')};
`;

const TypingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 3.2rem;

  width: 10.5rem;
  height: 2.7rem;

  > input {
    border: none;
    background: transparent;

    font-size: 2.29rem;
    font-weight: 400;

    &:focus {
      outline: none;
      border: none;
    }
  }
`;
