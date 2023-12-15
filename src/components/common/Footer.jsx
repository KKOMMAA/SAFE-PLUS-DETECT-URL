import React from 'react';
import styled from 'styled-components';
import homeIcon from '../../assets/icon/Ic_footer_home.svg';
import productIcon from '../../assets/icon/Ic_footer_product.svg';
import assetIcon from '../../assets/icon/Ic_footer_asset.svg';
import payIcon from '../../assets/icon/Ic_footer_pay.svg';
import menuIcon from '../../assets/icon/Ic_footer_menu.svg';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const icons = [homeIcon, productIcon, assetIcon, payIcon, menuIcon];
  const icon_desc = ['홈', '상품', '자산', '결제', '메뉴'];

  const navigate = useNavigate();
  return (
    <FooterWrapper onClick={() => navigate('/')}>
      {icons.map((icon, index) => (
        <FooterMenu key={index}>
          <img src={icon} alt="푸터메뉴" />
          <p>{icon_desc[index]}</p>
        </FooterMenu>
      ))}
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  height: 8.2rem;
  gap: 4.2rem;

  position: fixed;
  bottom: 0;

  background: rgba(242, 241, 241, 0.73);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;

  > button {
    background-color: transparent;
  }

  > p {
    font-size: 1rem;
    font-weight: 500;

    color: #7c90a4;
  }
`;
