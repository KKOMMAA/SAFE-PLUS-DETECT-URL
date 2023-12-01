import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BOTTOM_SHEET_HEIGHT } from '../../utils/bottomSheetOption';

import searchIcon from '../../assets/icon/Ic_transfer_search.svg';
import sliderIcon from '../../assets/icon/Ic_transfer_slider.svg';

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

  return (
    <TransferAccountListModal isVisible={isVisible}>
      <TransferAccountListModalContent onClick={() => handleClick()}>
        <input type="text" placeholder="이름, 계좌번호, 연락처, 국세 등 입력" />

        <button type="button">
          <img src={searchIcon} alt="검색" />
        </button>
      </TransferAccountListModalContent>
      <img src={sliderIcon} alt="최근자주내계좌" />
    </TransferAccountListModal>
  );
}

const TransferAccountListModal = styled(motion.dialog)`
  display: flex;
  flex-direction: column;

  max-width: 37.5rem;
  width: 100%;

  position: fixed;
  z-index: 1;
  top: 40%;
  left: 0;
  right: 0;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${BOTTOM_SHEET_HEIGHT}px;

  background-color: white;

  transition: transform 800ms ease-out; /*바텀시트 애니메이션 속도*/
  transform: translateY(${props => (props.isVisible ? '0%' : '80%')});

  > img {
    margin-top: 2rem;
  }
`;

const TransferAccountListModalContent = styled.form`
  overflow: auto;
  -webkit-overflow-scrolling: touch;

  display: flex;
  justify-content: center;

  > input {
    width: 28.5rem;
    height: 3rem;
    border-width: 0px 0px 1px 0px;
    border-color: #009491;
    position: relative;

    margin-top: 2rem;

    &:focus {
      outline: 1px solid #009491;
    }
  }

  > button {
    position: absolute;
    right: 5rem;
    top: 3.5rem;
    background: none;
  }
`;
