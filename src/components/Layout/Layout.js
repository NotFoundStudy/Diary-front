import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import MainCover from "./MainCover/MainCover";
import Footer from "./Footer/Footer";
import Menu from "../Menu/Menu";
import {Col, Grid, Row} from "antd";
import Container from "./Container/Container";
import {useSelector} from "react-redux";

const Layout = (props) => {

    const {
        children
    } = props;

    const screens = Grid.useBreakpoint();
    const [rwdVisible, setRwdVisible] = useState(false);

    // const {menuHead} = useSelector(state => state.app);
    // menuList also use Redux
    const menuHead = 'menuHead'
    const menuList = [ // sample
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
            key: 'introduction/people',
            icon: '',
            name: 'People',
            sub_menu: [
                {
                    key: 'introduction/people/currentMember',
                    icon: '',
                    name: 'currentMember',
                },
                {
                    key: 'introduction/people/alumni',
                    icon: '',
                    name: 'alumni',
                },
            ]
        }
    ]

        return (
        <Wrapper>
            <MainCover/>
            <Container style={{padding: '50px 0 90px'}}>
                {/* Row - gutter(px)*/}
                {/* Col - xs : ~576px | sm : ~768px | md : ~992px |  lg : ~1200px */}
                {/* [rwd] sm 사이즈에서 왼쪽 사이드바 삭제 & 헤더 드롭다운 방식으로 변경 */}
                <Row gutter={34} justify={'center'} style={{minHeight: 'calc(100vh - 400px)'}}>
                    {
                        !screens.xs &&
                        <Col flex={'100px'}>
                            <MenuHead>{menuHead}</MenuHead>
                            <StyledMenu list={menuList}
                                        mode={'inline'}
                                        subMenuOpenDelay={0}
                            />
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

const StyledMenu = styled(Menu)`
  &.ant-menu{
    border-right: initial;
    &.ant-menu-sub {
      > li{
        padding-top: 10px;
        padding-bottom: 10px;
        color:#6c6c6c;
      }
    }
    .ant-menu-submenu-inline > .ant-menu-submenu-title {
      .ant-menu-submenu-arrow::before, .ant-menu-submenu-arrow::after{
          background:#999;
      }
    }
    li { // ant-menu-item
      height: 55px;
      margin: 0;
      line-height: 53px;
      font-size: 16px;
      font-weight: 400;
      color:#777;
      border-bottom:1px solid #f1f1f1;
      &:first-child{
        border-top:1px solid #f1f1f1;
      }
    }
  }
`;
const MenuHead = styled.div`
  padding: 20px 10px;
  background: #094c90;
  text-transform: capitalize;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color:#fff;
`;
export default Layout;