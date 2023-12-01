import React, { useState } from 'react';
import TransferHeader from '../components/common/TransferHeader';
import styled from 'styled-components';

import accountInfoIcon from '../assets/icon/Ic_transfer_accountInfo.svg';
import sendByPhoneNumIcon from '../assets/icon/Ic_transfer_sendByPhoneNum.svg';
import AccountNumBottomSheet from '../components/Transfer/AccountNumBottomSheet';
import ChooseBankBottomSheet from '../components/Transfer/ChooseBankBottomSheet';

export default function TransferHome() {
  const [isBankChosen, setIsBankChosen] = useState(false);
  return (
    <TransferAccountWrapper>
      <TransferHeader backto="/" />
      <img src={accountInfoIcon} alt="계좌정보" />
      <h1>
        <strong>누구에게 </strong>
        보낼까요?
      </h1>
      <TransferAccountNumberForm>
        <input type="text" placeholder="은행/계좌번호 입력" />
      </TransferAccountNumberForm>
      <img src={sendByPhoneNumIcon} alt="계좌정보" />
      {isBankChosen ? (
        <ChooseBankBottomSheet />
      ) : (
        <AccountNumBottomSheet handleClick={() => setIsBankChosen(true)} />
      )}
    </TransferAccountWrapper>
  );
}

const TransferAccountWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f9f9fb;

  > img {
    margin-top: 1.5rem;
  }

  >img: nth-of-type(2) {
    align-self: flex-end;
    margin-right: 4.5rem;
    margin-top: 1.2rem;
  }

  > h1 {
    margin-top: 2.3rem;

    font-size: 2rem;
    font-weight: 400;

    > strong {
      font-weight: 600;
    }
  }
`;

const TransferAccountNumberForm = styled.form`
  > input {
    width: 28.6rem;
    height: 5.1rem;
    margin-top: 1.7rem;

    border-radius: 0.5rem;
    border: 1px solid #000;

    padding-left: 1.2rem;

    font-size: 1.82rem;
    font-weight: 400;
  }
`;
