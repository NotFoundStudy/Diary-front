import React, {useState} from 'react';
import styled from "styled-components";
import MainCover from "./MainCover/MainCover";
import Footer from "./Footer/Footer";
import Menu from "../Menu/Menu";
import {Col, Grid, Row} from "antd";
import Container from "./Container/Container";
import DropdownNavbar from "./Navbar/DropdownNavbar";

const Layout = (props) => {

    const {
        children
    } = props;

    const screens = Grid.useBreakpoint();
    const [rwdVisible, setRwdVisible] = useState(false);

    return (
        <Wrapper>
            {
                !screens.xs && // Col - xs : ~576px | sm : ~768px | md : ~992px |  lg : ~1200px
                <>
                    <MainCover/>
                    <Container style={{minHeight: 'calc(100vh - 400px)', padding: '50px 0 90px'}}>
                        {children}
                    </Container>
                </>
            }
            {
                screens.xs &&
                <div style={{minHeight: 'calc(100vh - 307px)'}}>
                    <MainCover/>
                    <DropdownNavbar/>
                    <div style={{padding: '20px 0'}}>
                        {children}
                    </div>
                </div>
            }
            <Footer/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .ant-row{
    flex-wrap: initial;
  }
`;

export default Layout;