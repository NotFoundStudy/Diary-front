import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import MainCover from "./MainCover/MainCover";
import Footer from "./Footer/Footer";
import Menu from "../Menu/Menu";
import {Col, Grid, Row} from "antd";
import Container from "./Container/Container";

const Layout = (props) => {

    const {
        children
    } = props;

    const screens = Grid.useBreakpoint();
    const [rwdVisible, setRwdVisible] = useState(false);

    return (
        <Wrapper>
            <MainCover/>
            <Container>
                {/* Row - gutter(px)*/}
                {/* Col - xs : ~576px | sm : ~768px | md : ~992px |  lg : ~1200px */}
                {/* [rwd] sm 사이즈에서 왼쪽 사이드바 삭제 & 헤더 드롭다운 방식으로 변경 */}
                <Row gutter={16} justify={'center'} style={{minHeight: 'calc(100vh - 400px)'}}>
                    {
                        !screens.xs &&
                        <Col flex={'100px'}>
                            <Menu mode={'inline'}/>
                        </Col>
                    }
                    <Col style={{flexGrow:1}}>
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default Layout;