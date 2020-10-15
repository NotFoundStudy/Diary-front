import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Grid} from "antd";
import SmallNavbar from "./SmallNavbar";
import NavMenu from "./NavMenu";

const Header = (props) => {

    const screens = Grid.useBreakpoint(); // xs:true, sm: false, ...
    const [smallScreen, setSmallScreen] = useState(false);

    useEffect(() => {
        if (screens.xs) {
            setSmallScreen(true)
        } else {
            setSmallScreen(false)
        }
    }, [screens]);

    return (
        <Wrapper>
            {/* Grid의 breakpoint 활용하여 xs 사이즈에서 햄버거버튼메뉴로 ui 변경*/}
            {/*  Navbar(기본), SmallNavbar(Button ui 필요, RWD 디자인 추가)  */}
            {
                smallScreen
                    ? <SmallNavbar/>
                    : <NavMenu/>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`

`;

export default Header;