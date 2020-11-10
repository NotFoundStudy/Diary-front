import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import MainCover from "./MainCover/MainCover";
import Footer from "./Footer/Footer";
import {Col, Grid, Row} from "antd";
import Container from "./Container/Container";
import DropdownNavbar from "./Navbar/DropdownNavbar";
import SideMenu from "./SideMenu/SideMenu";
import {useSelector} from "react-redux";
import {getLocalStorage, setLocalStorage} from "../../helper/tokenHelper";
import {AppstoreOutlined} from "@ant-design/icons";

const Layout = (props) => {

    const {
        children
    } = props;

    const screens = Grid.useBreakpoint();
    const {currentSideMenu} = useSelector(state => state.app);

    return (
        <Wrapper>
            {
                !screens.xs && // Col - xs : ~576px | sm : ~768px | md : ~992px |  lg : ~1200px
                <>
                    {/*<MainCover routePath={}/>*/}
                    <Container style={{padding: '50px 20px 90px'}}>
                        <Row gutter={34} justify={'center'} style={{minHeight: 'calc(100vh - 400px)'}}>
                            {
                                currentSideMenu &&
                                <Col flex={'100px'}>
                                    <SideMenu menu={currentSideMenu}/>
                                </Col>
                            }
                            <Col style={{flexGrow: 1}}>
                                {children}
                            </Col>
                        </Row>
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