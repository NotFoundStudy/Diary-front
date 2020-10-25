import React from 'react';
import styled from "styled-components";
import Container from "../Container/Container";
import Images from "../../../assets/image";
import Select from "../../Select/Select";
import {goTo} from "../../../helper/historyHelper";

const Footer = (props) => {

    return (
        <Wrapper>
            <Container>
                <Top>
                    <Links>
                        <LinkItem href={''}>개인정보처리방침</LinkItem>
                        <LinkItem href={''}>저작권보호정책</LinkItem>
                        <LinkItem href={''}>이메일무단수집거부</LinkItem>
                    </Links>
                    <SelectWrap>
                        <Select
                            options={[
                                {
                                    name: '관련사이트 바로가기',
                                    value: '',
                                },
                                {
                                    name: '수원대학교',
                                    value: 'https://www.suwon.ac.kr/index.html?menuno=593',
                                },
                            ]}
                            defaultValue={'관련사이트 바로가기'}
                            onChange={(v) => goTo(v)}
                            style={{width:'160px'}}
                        />
                        <DemoUi>이동</DemoUi>
                    </SelectWrap>
                </Top>

                <Bottom>
                    <Text>
                        <p>46241) 부산광역시 금정구 부산대학로63번길 2 (장전동)</p>
                        <p>TEL : +82-51-510-2467 / Lab) +82-51-510-3640</p>
                        <p className={'light'}>Copyright (C) PUSAN NATIONAL UNIVERSITY. All Rights Reserved.</p>
                    </Text>
                    <Logo href={'http://www.pusan.ac.kr/index.jsp'}>
                        <img src={Images.logoUniversity} alt=""/>
                    </Logo>
                </Bottom>
            </Container>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  // rwd
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    padding-bottom: 14px;
    justify-content: center;    
  }
`;
const Links = styled.div`
  padding: 14px 0;  
`;
const LinkItem = styled.a`
  margin-left: 10px;
  padding-left: 10px;
  border-left:1px solid #b5b5b5;
  &:first-child{
    margin-left: 0;
    padding-left: 0;
    border-left: none;
  }
  font-size: 0.8rem;
  color:#444444;
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
`;
const DemoUi = styled.div`
  margin-left: 4px;
  padding: 6px 9px;
  border-radius: 3px;
  background:#3d4e5f;
  font-size: 13px;
  color:#e4e4e4;
  cursor:pointer;
`;

const Text = styled.div`
  p{
    margin: 0;
    line-height: 1.7;
    font-size: 0.75rem;
    color:#868686;
    &.light{
      color:#b7b7b7;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  // rwd
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    justify-content: center;    
    ${Text} {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;
const Logo = styled.a`
 height: 40px;
 cursor:pointer;
`;

export default Footer;