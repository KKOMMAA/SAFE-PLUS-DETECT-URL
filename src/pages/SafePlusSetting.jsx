import React, { useState } from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';

import allowAccountSafePlusOn from '../assets/icon/Ic_accout_on.svg';
import allowAccountSafePlusOff from '../assets/icon/Ic_accout_off.svg';

import activationOffIcon from '../assets/icon/Ic_activation_off.svg';
import activationOnIcon from '../assets/icon/Ic_activation_on.svg';
import dividingLine from '../assets/icon/Ic_activation_dividingLine.svg';
import { useNavigate } from 'react-router-dom';

export default function SafePlusSetting() {
  const navigate = useNavigate();
  const [phoneNum, setPhoneNum] = useState('');
  const accountNum = [
    '급여계좌[123-456789-012]',
    '저축예금[789-451289-090]',
    '행복노하우통장[123-456789-012]',
  ];
  const [isPhoneNumSet, setIsPhoneNumSet] = useState(false);
  const [accountStatus, setAccountStatus] = useState([false, false, false]);
  const accountBalance = ['4,026,561원', '90,265,611원', '5,826,700원'];
  const [activationMenuStatus, setActivationMenuStatus] = useState([false, false, false]);
  const activationMenuTitle = [
    '사기 계좌 탐지 기능',
    '문자 악성코드 탐지 기능',
    'AI 맞춤 금융 보안 서비스',
  ];
  const activationMenuDesc = [
    '송금할 때, 송금하는 \n 계좌번호에 대해 사기 이력이 있는지 \n 미리 검사합니다.',
    `
    문자 수신시, 정보가 불분명한 
    링크에 대하여 악성코드를 
    검사합니다.
    `,
    `
    소비 패턴을 분석하여,
    특이한 소비 이력을 알람을 통해
    금융 범죄를 예방합니다.
    `,
  ];

  const handleActivation = index => {
    setActivationMenuStatus(prevStatus => {
      const newArray = [...prevStatus];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  const handleAccount = index => {
    setAccountStatus(prevStatus => {
      const newArray = [...prevStatus];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };
  return (
    <>
      <Header backto="/safeplus-home" title="safe+ 활성화 환경 설정하기" />
      <SettingWrapper>
        <TopCaptionWrapper>
          <h2>기능 활성화 선택</h2>
          <li>safe+를 활성화 하고 싶은 서비스를 눌러주세요.</li>
        </TopCaptionWrapper>

        <ActivationArea>
          {activationMenuTitle.map((title, index) => {
            return (
              <ActivationMenu
                onClick={() => handleActivation(index)}
                isActivated={activationMenuStatus[index]}
                key={index}
              >
                <h2>{title}</h2>
                <p>{activationMenuDesc[index]}</p>

                {activationMenuStatus[index] ? (
                  <img src={activationOnIcon} />
                ) : (
                  <img src={activationOffIcon} />
                )}
              </ActivationMenu>
            );
          })}
        </ActivationArea>

        <img src={dividingLine} />

        <ParentsServiceWrapper>
          <h2>보호자 알림 서비스 신청</h2>
          <p>
            &#183; 보호자도 하나원큐 앱이 있어야 알림 가능합니다!
            <br />
            &nbsp; 어플리케이션이 없다면 미리 설치해주세요 😊
          </p>

          <p>
            &#183; 보호자 번호 입력시 초대 링크가 발송됩니다. <br />
            &nbsp; 확인 후 동의해주세요😊
          </p>

          <ParentServiceInputWrapper isActivated={isPhoneNumSet}>
            {!isPhoneNumSet ? (
              <InputWrapper>
                <input
                  placeholder="보호자 번호를 입력해주세요."
                  onChange={e => setPhoneNum(e.target.value)}
                />
                <SubmitBtn type="button" isActivated={true} onClick={() => setIsPhoneNumSet(true)}>
                  전송
                </SubmitBtn>
              </InputWrapper>
            ) : (
              <>
                <InputWrapper>
                  <input value={phoneNum} />
                  <SubmitBtn isActivated={false} type="button">
                    전송
                  </SubmitBtn>
                </InputWrapper>
                <section>보호자 휴대폰 알림 번호 변경</section>
              </>
            )}
          </ParentServiceInputWrapper>
        </ParentsServiceWrapper>

        <img src={dividingLine} />

        {(activationMenuStatus[0] || activationMenuStatus[2]) && (
          <ActivateAccount>
            <h2>활성화할 계좌 선택</h2>

            <ActivateAccountWrapper>
              {accountNum.map((accountNum, index) => {
                return (
                  <AccountWrapper
                    onClick={() => handleAccount(index)}
                    key={index}
                    isActivated={accountStatus[index]}
                  >
                    <h2>{accountNum}</h2>
                    <h3>{accountBalance[index]}</h3>

                    {accountStatus[index] ? (
                      <img src={allowAccountSafePlusOff} />
                    ) : (
                      <img src={allowAccountSafePlusOn} />
                    )}
                  </AccountWrapper>
                );
              })}
            </ActivateAccountWrapper>
          </ActivateAccount>
        )}

        <button type="button" onClick={() => navigate('/safeplus-home')}>
          {' '}
          저장하기{' '}
        </button>
      </SettingWrapper>
    </>
  );
}

const SettingWrapper = styled.div`
  margin-top: 3.2rem;
  padding-bottom: 8rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;

  > h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  > img {
    margin-top: 3.2rem;
    margin-bottom: 2.6rem;
  }

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30.7rem;
    height: 4.6rem;
    border-radius: 0.9rem;
    background: linear-gradient(180deg, #c43c39 0%, #f9bbae 100%);

    color: #fff;
    margin-top: 1.7rem;
    margin-bottom: 1.1rem;

    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
`;

const TopCaptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 4.2rem;

  > h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  > li {
    color: #353535;

    font-size: 1.22rem;
    font-weight: 500;
  }

  margin-bottom: 1.3rem;
`;

const ActivationArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding-left: 4.2rem;
  padding-right: 4.2rem;
`;

const ActivationMenu = styled.div`
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  positive: relative;
  gap: 0.2rem;

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  > p {
    width: 17rem;
    font-size: 1.3rem;
    font-weight: 400;
  }

  > img {
    position: absolute;
    right: 5.5rem;
  }

  background: ${props =>
    !props.isActivated
      ? 'linear-gradient(180deg, #E8E9EA 0%, #FDFDFD 100%)'
      : 'linear-gradient(180deg, #D72146 0%, #EB6F4F 100%)'};

  color: ${props => (props.isActivated ? `#fff` : `#292929`)};

  box-shadow: ${props => props.isActivated && `0px 4px 4px 0px`};
  border-radius: 0.8rem;

  padding-left: 1.87rem;
  padding-right: 1.27rem;
`;

const ParentsServiceWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 4.2rem;
  padding-right: 4.2rem;

  > h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.7rem;
  }

  > p {
    font-size: 1.22rem;
    font-weight: 500;

    &:nth-of-type(1) {
      margin-bottom: 0.5rem;
    }
  }
`;

const ParentServiceInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.3rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.4rem;
    border: 1px solid #000;

    background: #df414a;

    color: #fff;

    font-size: 1.5rem;
    font-weight: 700;

    width: 100%;
    height: 4rem;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

const SubmitBtn = styled.button`
  border-radius: 0.4rem;
  border: ${props => (props.isActivated ? `1px solid #000` : `none`)};
  background: ${props => (props.isActivated ? `#DF414A` : `#EBEBEB`)};
  box-shadow: ${props => props.isActivated && `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`};
  color: #fff;
  width: 5.3rem;
  height: 4rem;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 0.2rem;

  > input {
    width: 25.2rem;
    height: 4rem;
    padding-left: 1.2rem;

    border: none;
    border-radius: 0.4rem;
    background: #ebebeb;
  }
`;

const ActivateAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
`;

const ActivateAccount = styled.div`
  padding-left: 4.2rem;
  padding-right: 4.2rem;

  > h2 {
    font-size: 1.6rem;
    font-weight: 600;

    margin-top: 1.1rem;
    margin-bottom: 1.1rem;
  }
`;

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 1.2rem 1.7rem;

  > h2 {
    color: #1e1e1e;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }

  > h3 {
    color: #070707;
    font-size: 2rem;
    font-weight: 600;
  }

  > img {
    margin-top: 1.2rem;
  }
  height: 11.5rem;

  border: ${props => props.isActivated && `3px solid #CF5550`};
  border-radius: 1.3rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: ${props => (props.isActivated ? `rgba(219, 114, 107, 0.31)` : `#FBFCFC`)};
`;
