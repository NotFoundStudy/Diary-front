import React from 'react';
import styled from "styled-components";
import {Menu as AntdMenu} from 'antd';
import {AppstoreOutlined} from '@ant-design/icons';
import {navigate} from "../../helper/historyHelper";

const {SubMenu} = AntdMenu;


const sampleList = [
    {
        key: '/introduction',
        icon: <AppstoreOutlined/>,
        name: 'Introduction',
        sub_menu: []
    },
    {
        key: '/introduction/professor',
        icon: <AppstoreOutlined/>,
        name: 'Professor',
        sub_menu: []
    },
    {   // key, icon, name, sub_menu 필수 항목
        key: 'introduction/people', // url값 ( string만 입력 )
        icon: <AppstoreOutlined/>, // 아이콘이 없다면 ''
        name: 'People', // 1depth메뉴의 이름, 서브메뉴의 타이틀
        sub_menu: [ // if(sub_menu)로 recursiveMenu(v) 순회 여부 결정
            {
                key: 'introduction/people/currentMember',
                icon: '',
                name: 'currentMember',
                // sub_menu: [
                //     {
                //         key: '6',
                //         icon: '',
                //         name: 'option66',
                //         sub_menu: []
                //     },
                //     {
                //         key: '7',
                //         icon: '',
                //         name: 'option77',
                //         sub_menu: []
                //     },
                // ]
            },
            {
                key: 'introduction/people/alumni',
                icon: '',
                name: 'alumni',
            },
        ]
    }
]
const Menu = (props) => {
    const {
        mode = 'horizontal', // vertical | horizontal | inline
        style,
        className,
        list,
    } = props;

    // localstorage등 에서 가져와서 하기 defaultSelcted등 세팅(여기서 하기)

    function recursiveMenu(subMenu) {
        subMenu.map(menu => <>
                {
                    menu.sub_menu
                        ? recursiveMenu(menu.sub_menu)
                        : <AntdMenu.Item key={menu.key}>{menu.name}</AntdMenu.Item>

                }
            </>
        )
    }

    return (
        <StyledMenu
            onClick={(e) => navigate(e.key)}
            // defaultSelectedKeys={['1']} // unit depth menu
            // defaultOpenKeys={['sub1']} // sub menu
            // onSelect={(e) => console.log('@@ onSelect', e)} // 로컨스토리지에 저장 & 네브 메뉴에서 학생 눌렀을떄 열려야함
            mode={mode}
            className={className}
            style={style}
            >
            {
                list.map(item =>
                    item.sub_menu.length > 0
                        ? <SubMenu key={item.key} icon={item.icon} title={item.name}>
                            {/*{*/}
                            {/*    recursiveMenu(item.sub_menu)*/}
                            {/*}*/}
                            {
                                item.sub_menu.map(menu =>
                                    <AntdMenu.Item key={menu.key}>{menu.name}</AntdMenu.Item>
                                )
                            }
                        </SubMenu>
                        : <AntdMenu.Item key={item.key} icon={item.icon}>
                            {item.name}
                        </AntdMenu.Item>
                )
            }
        </StyledMenu>
    )
};

const StyledMenu = styled(AntdMenu)`
  ${props => props.mode === 'horizontal' ? 'width: initial;': 'width: 256px;'}
  ${props => props.style && {...props.style}};
  
  &.ant-menu-inline{
    .ant-menu-submenu-title{
      height: 55px;
      margin-bottom: -1px;
      padding-top: 7px; 
    }
    .ant-menu-item {
      height: 55px;
      margin-bottom: 0;
      line-height: 55px;
    }
  }
`;

export default Menu;