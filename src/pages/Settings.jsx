import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import ServiceBox from '../components/common/ServiceBox';
import dividingLine from '../assets/icon/Ic_settings_dividingLine.svg';
import { registerServiceWorker } from '../utils/notification';
import { getToken } from 'firebase/messaging';
import { messaging } from '../core/settingFCM';
import { useMutation } from '@tanstack/react-query';
import { patchDeviceToken } from '../core/patchDeviceToken';
import { postNotificationRequest } from '../core/postNotificationRequest';
import { useNavigate } from 'react-router-dom';
import HomeMenu from '../components/common/HomeMenu';
import settingIcon from '../assets/icon/Ic_homeMenu_setting.svg';
import safePlusIcon from '../assets/icon/Ic_homeMenu_safeplus.svg';

import accountIcon from '../assets/icon/Ic_homeMenu_account.svg';
import youngHanaIcon from '../assets/icon/Ic_homeMenu_Younghana.svg';
import eventIcon from '../assets/icon/Ic_homeMenu_event.svg';
import stockIcon from '../assets/icon/Ic_homeMenu_stock.svg';
import fundIcon from '../assets/icon/Ic_homeMenu_fund.svg';
import resetIcon from '../assets/icon/Ic_homeMenu_reset.svg';

export default function Settings() {
  const serviceList = ['전체계좌', '이벤트', '영하나', 'safe+', '주식추천', '펀드'];
  const [deviceToken, setDeviceToken] = useState({
    token: '',
  });
  const navigate = useNavigate();
  const [isSafePlusAdded, setIsSafePlusAdded] = useState(false);

  async function handleAllowNotification() {
    const permission = await Notification.requestPermission();

    registerServiceWorker();

    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_VAPID_KEY,
    });

    setDeviceToken({
      token: token,
    });
  }

  useEffect(() => {
    deviceToken?.token !== '' &&
      deviceToken?.token !== undefined &&
      patchingDeviceToken(deviceToken?.token);
    console.log(deviceToken);
  }, [deviceToken]);

  // 디바이브 토큰 가져오기
  async function getDeviceToken() {
    const token = await getToken(messaging, {
      vapidKey: process.env.REACT_APP_VAPID_KEY,
    });

    setDeviceToken({
      token: token,
    });
  }

  const { mutate: patchingDeviceToken } = useMutation({
    mutationFn: patchDeviceToken,
    onSuccess: res => {
      console.log(res);
    },
    onError: err => {
      console.log(err);
    },
  });

  function handleShowNotification() {
    postNotificationRequest(deviceToken.token);
  }

  // useEffect(() => {
  //   handleAllowNotification();
  // }, []);

  const handleAddSafePlus = () => {
    handleAllowNotification();
    // handleShowNotification();
    setIsSafePlusAdded(prev => !prev);
  };

  const MenuIconSrcs = [accountIcon, youngHanaIcon, eventIcon, stockIcon, fundIcon];
  const MenuIconDecs = ['전체계좌', '영하나', '이벤트', '주식추천', '펀드'];

  return (
    <SettingsWrapper>
      <Header backto="/" title="맞춤 설정" />
      <MenuDescWrapper>
        <h3>최소 2개 ~ 최대 8개의 메뉴를 선택할 수 있어요.(5/8)</h3>
        <h3>선택한 메뉴 박스를 길게 눌러 위치를 이동할 수 있어요.</h3>
      </MenuDescWrapper>

      <MenuWrapper>
        {MenuIconSrcs.map((src, index) => (
          <HomeMenu
            isSetting={true}
            src={isSafePlusAdded && index == 4 ? safePlusIcon : src}
            desc={isSafePlusAdded && index == 4 ? 'safe+' : MenuIconDecs[index]}
            key={index}
          />
        ))}
        <HomeMenu isSetting={true} src={resetIcon} desc="초기화" />
      </MenuWrapper>

      <img src={dividingLine} alt="구분선" />

      <ServiceWrapper>
        <h2>서비스</h2>
        <ServiceMenuWrapper>
          {serviceList.map((service, index) => (
            <ServiceBox
              isSelected={
                (!isSafePlusAdded && index == 3) || (isSafePlusAdded && index == 5) ? false : true
              }
              desc={service}
              key={service}
              handleClick={handleAddSafePlus}
            />
          ))}
        </ServiceMenuWrapper>
      </ServiceWrapper>

      <SaveButton onClick={() => navigate('/safeplus-home')}>저장하기</SaveButton>
    </SettingsWrapper>
  );
}

const SettingsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fbfcfc;

  > img {
    margin-top: 3.2rem;
    margin-bottom: 3rem;
  }
`;

const MenuDescWrapper = styled.section`
  color: #353535;

  font-size: 1.22rem;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

const ServiceWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    align-self: flex-start;
    margin-bottom: 1.9rem;
    margin-left: 2rem;

    color: #393939;

    font-size: 1.6rem;
    font-weight: 600;
  }
`;

const ServiceMenuWrapper = styled.div`
  width: 33rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem 0.6rem;
`;

const SaveButton = styled.button`
  width: 30.3rem;
  height: 4.6rem;
  margin-top: 1.9rem;

  border-radius: 0.9rem;
  background-color: #009491;

  color: #fff;

  font-size: 1.5rem;
  font-weight: 500;
`;

const MenuWrapper = styled.section`
  width: 24rem;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 2.5rem 4rem;
  margin-top: 3.5rem;
`;
