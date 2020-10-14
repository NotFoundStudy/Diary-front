import React from 'react';
import styled from "styled-components";
import MainCover from "./MainCover/MainCover";
import Footer from "./Footer/Footer";
import Sidebar from "./Sidebar/Sidebar";
import {Col, Row} from "antd";
import Container from "./Container/Container";

const Layout = (props) => {

    const {
        children
    } = props;

    return (
        <Wrapper>
            <MainCover/>
            <Container>
                {/* Row - gutter : by pixel */}
                {/* Col - xs : ~576px | sm : ~768px | md : ~992px |  lg : ~1200px */}
                <StyledRow gutter={16}>
                    <Col flex={'100px'}>
                        <Sidebar/>
                    </Col>
                    <Col flex="auto">
                        {children}
                    </Col>
                </StyledRow>
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
const StyledRow = styled(Row)`
   display: flex;
   justify-content: center;
   width: 100%;
`;
export default Layout;