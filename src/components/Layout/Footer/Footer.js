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
                        <LinkItem>개인정보처리방침</LinkItem>
                        <LinkItem>저작권보호정책</LinkItem>
                        <LinkItem>이메일무단수집거부</LinkItem>
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
                        <p>Copyright (C) PUSAN NATIONAL UNIVERSITY. All Rights Reserved.</p>
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
`;
const Links = styled.div`

`;
const LinkItem = styled.div`
  display: inline-flex;
`;
const SelectWrap = styled.div`
  display: flex;
  align-items: center;
`;
const DemoUi = styled.div`
  
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
`;
const Logo = styled.a`
`;

export default Footer;