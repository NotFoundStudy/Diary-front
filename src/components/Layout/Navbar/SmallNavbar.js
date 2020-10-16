import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {FiMenu} from "react-icons/all";
import Button from "../../Button/Button";
import Menu from "../../Menu/Menu";

const SmallNavbar = (props) => {

    const dom = useRef(null);
    const [visible, setVisible] = useState(false);

    // 이벤트 트리거 타겟 수정

    function handleClickOutside(e){
        // const domNode = dom.current;
        //
        // // (!domNode || !domNode.contains(e.target)) ? setVisible(false) : setVisible(true)
        // if(!domNode || !domNode.contains(e.target)) {
        //     console.log('@@ clicked outside');
        //     setVisible(false)
        // } else{
        //     console.log('@@ right area?');
        //     setVisible(true)
        // }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [])

    return (
        <Wrapper>
            <Button onClick={() => setVisible(!visible)}>
                <FiMenu/>
            </Button>
            {/* 추후 애니메이션 추가 */}
            {
                visible &&
                <Screen>
                    <Menu ref={dom} mode={'inline'}/>
                </Screen>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;
const Screen = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  &:before{
    content: '';
    position: absolute;
    z-index: -1;
    background:rgba(0,0,0,.2);
  }
`;

export default SmallNavbar;