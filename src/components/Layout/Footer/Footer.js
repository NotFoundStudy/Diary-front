import React from 'react';
import styled from "styled-components";
import { Select } from 'antd';
import Container from "../Container/Container";
import Images from "../../../assets/image";

const { Option } = Select;

const Footer = (props) => {

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <Wrapper>
            <Container>
                <Top>
                    <Links>
                        <LinkItem href={'http://his.pusan.ac.kr/cmmCon/Privacy/view..do'}>개인정보처리방침</LinkItem>
                        <LinkItem href={'http://his.pusan.ac.kr/cmmCon/copyright/view..do'}>저작권보호정책</LinkItem>
                        <LinkItem href={'http://his.pusan.ac.kr/cmmCon/email/view..do'}>이메일무단수집거부</LinkItem>
                    </Links>
                    <SelectWrap>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                                Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
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
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
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
  font-size: 14px;
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
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;
`;
const Text = styled.div`
  p{
    margin: 0;
    line-height: 1.7;
    font-size: 14px;
    color:#868686;
    &.light{
      color:#b7b7b7;
    }
  }
`;
const Logo = styled.a`
 height: 40px;
 cursor:pointer;
`;

export default Footer;