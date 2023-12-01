import React, { useState } from 'react';
import styled from 'styled-components';
import TransferAccountInfoHeader from '../components/common/TransferAccountInfoHeader';

import Hana from '../assets/icon/Ic_bankname_hana.svg';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { sendAccount } from '../core/atom';

export default function TransferAccountInfo() {
  const [account, setAccount] = useState('');
  const setSendingAccount = useSetRecoilState(sendAccount);
  const navigate = useNavigate();

  const handleChange = e => {
    const val = e.target.value;

    setAccount(val);
  };
  return (
    <TransferAccountInfoWrapper>
      <TransferAccountInfoHeader backto="/transfer" />

      <img src={Hana} alt="하나" />
      <input onChange={e => handleChange(e)} />
      <p>계좌번호</p>

      <CheckButton
        haveValue={account.length}
        setSendingAccount
        onClick={() => {
          if (account.length) {
            setSendingAccount(account);
            navigate('/how-much');
          }
        }}
      >
        확인
      </CheckButton>
    </TransferAccountInfoWrapper>
  );
}

const TransferAccountInfoWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  > img {
    margin-top: 2rem;
  }

  > input {
    margin-top: 1.7rem;
    border-radius: 0.4rem;
    border: 1px solid #dddee4;

    font-size: 1.9rem;
    font-weight: 400;

    width: 32.8rem;
    height: 5.2rem;

    padding-top: 1.5rem;
    padding-left: 1.4rem;
  }

  > p {
    position: absolute;
    top: 17.5rem;
    left: 3.8rem;

    color: #767676;
    font-size: 1.15rem;
    font-weight: 300;
  }
`;

const CheckButton = styled.button`
  width: 33rem;
  height: 4.5rem;
  position: absolute;
  bottom: 3.5rem;

  border-radius: 2.55rem;

  color: #fff;
  font-size: 1.7rem;
  font-weight: 500;

  background-color: ${props => (props.haveValue ? '#009491' : '#DBDBDB')};
`;
