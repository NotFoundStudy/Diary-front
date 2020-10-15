import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Menu} from 'antd';
import {MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import Shortcuts from "./Shortcuts";

const {SubMenu} = Menu;

const NavMenu = (props) => {

    const {
        mode = 'horizontal',
    } = props;

    const [current, setCurrent] = useState('mail');

    const handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    return (
        // Nav 메뉴의 공통 기능만 시행
        <Wrapper mode={mode}>
            {
                mode === 'horizontal' && <Shortcuts/>
            }
            <Menu onClick={handleClick} selectedKeys={[current]} mode={mode}
                        className={mode === 'vertical' && 'small-navbar'}>
                <Menu.Item key="mail" icon={<MailOutlined/>}>
                    Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled icon={<AppstoreOutlined/>}>
                    Navigation Two
                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined/>} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.mode === 'horizontal' && css`
      align-items: flex-end;
  `}
  &.small-navbar {
    background:blue;
  }
`;

export default NavMenu;