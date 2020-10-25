import React, {useState} from 'react';
import styled from "styled-components";
import MainCover from "./MainCover/MainCover";
import Footer from "./Footer/Footer";
import Menu from "../Menu/Menu";
import {Col, Grid, Row} from "antd";
import Container from "./Container/Container";
import DropdownNavbar from "./Navbar/DropdownNavbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = (props) => {

    const {
        children
    } = props;

    const screens = Grid.useBreakpoint();
    const [rwdVisible, setRwdVisible] = useState(false);

    const sideMenuList = { // selector
        head: 'menuHead',
        list: [
            {
                key: '/introduction',
                icon: '',
                name: 'Introduction',
                sub_menu: []
            },
            {
                key: '/introduction/professor',
                icon: '',
                name: 'Professor',
                sub_menu: []
            },
            {
                key: '/introduction/people',
                icon: '',
                name: 'People',
                sub_menu: [
                    {
                        key: '/introduction/people/currentMember',
                        icon: '',
                        name: 'currentMember',
                    },
                    {
                        key: '/introduction/people/alumni',
                        icon: '',
                        name: 'alumni',
                    },
                ]
            }
        ]
    }

    return (
        <Wrapper>
            {
                !screens.xs && // Col - xs : ~576px | sm : ~768px | md : ~992px |  lg : ~1200px
                <>
                    <MainCover/>
                    <Container style={{padding: '50px 0 90px'}}>
                        <Row gutter={34} justify={'center'} style={{minHeight: 'calc(100vh - 400px)'}}>
                            <Col flex={'100px'}>
                               <Sidebar list={sideMenuList}/>
                            </Col>
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