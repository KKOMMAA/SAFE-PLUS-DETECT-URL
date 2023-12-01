import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from '../../utils/bottomSheetOption';
import { motion } from 'framer-motion';
import useBottomSheet from '../../hooks/useBottomSheet';

import deleteIcon from '../../assets/icon/Ic_bottomSheet_delete.svg';
import menuIcon from '../../assets/icon/Ic_chooseBank_menu.svg';

import bank1 from '../../assets/icon/bank1.svg';
import bank2 from '../../assets/icon/bank2.svg';
import bank3 from '../../assets/icon/bank3.svg';
import bank4 from '../../assets/icon/bank4.svg';
import bank5 from '../../assets/icon/bank5.svg';
import bank6 from '../../assets/icon/bank6.svg';
import bank7 from '../../assets/icon/bank7.svg';
import bank8 from '../../assets/icon/bank8.svg';
import bank9 from '../../assets/icon/bank9.svg';
import bank10 from '../../assets/icon/bank10.svg';
import bank11 from '../../assets/icon/bank11.svg';
import bank12 from '../../assets/icon/bank12.svg';
import bank13 from '../../assets/icon/bank13.svg';
import bank14 from '../../assets/icon/bank14.svg';
import bank15 from '../../assets/icon/bank15.svg';
import bank16 from '../../assets/icon/bank16.svg';
import bank17 from '../../assets/icon/bank17.svg';
import bank18 from '../../assets/icon/bank18.svg';
import BankButton from './BankButton';

export default function AccountNumBottomSheet({ handleClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 일정 지연 후에 bottom sheet을 표시합니다 (필요에 따라 지연을 조정하세요).
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // 컴포넌트가 언마운트되면 메모리 누수를 방지하기 위해 타임아웃을 클리어합니다.
    return () => clearTimeout(timeoutId);
  }, []);

  const bankList = [
    [bank1, '하나'],
    [bank2, '신한'],
    [bank3, '새마을금고'],
    [bank4, '국민'],
    [bank5, '우리'],
    [bank6, '기업'],
    [bank7, '대구'],
    [bank8, '부산'],
    [bank9, '경남'],
    [bank10, '광주'],
    [bank11, '전북'],
    [bank12, '제주'],
    [bank13, '대구'],
    [bank14, '산업'],
    [bank15, '수협'],
    [bank16, '한국시티'],
    [bank17, 'SC제일'],
    [bank18, 'HSBC'],
  ];

  return (
    <TransferAccountListModal isVisible={isVisible}>
      <TransferAccountListModalContent onClick={() => handleClick()}>
        <header>
          <img src={deleteIcon} alt="취소" />
          <h1>은행 선택</h1>
        </header>
        <img src={menuIcon} alt="menu" />

        <BankSection>
          {bankList.map((bankInfo, index) => (
            <BankButton key={index} src={bankInfo[0]} bankName={bankInfo[1]} />
          ))}
        </BankSection>
      </TransferAccountListModalContent>
    </TransferAccountListModal>
  );
}

const TransferAccountListModal = styled(motion.dialog)`
  display: flex;

  max-width: 37.5rem;
  width: 100%;

  position: fixed;
  z-index: 1;
  top: 40%;
  left: 0;
  right: 0;

  border: none;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background-color: white;

  transition: transform 800ms ease-out; /*바텀시트 애니메이션 속도*/
  transform: translateY(${props => (props.isVisible ? '0%' : '80%')});
`;

const TransferAccountListModalContent = styled.form`
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  > header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    > img {
      position: absolute;
      left: 2rem;
    }

    > h1 {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  > img {
    margin-top: 2rem;
  }
`;

const BankSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  height: 30rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  padding-bottom: 3rem;
`;
