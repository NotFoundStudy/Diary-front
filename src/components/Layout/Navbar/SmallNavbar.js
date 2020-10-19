import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {FiMenu} from "react-icons/all";
import Button from "../../Button/Button";
import Menu from "../../Menu/Menu";

const SmallNavbar = (props) => {

    const dom = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    }, [])

    function handleClickOutside(e){
        const domNode = dom.current;

        // (!domNode || !domNode.contains(e.target)) ? setVisible(false) : setVisible(true)
        if(!domNode || !domNode.contains(e.target)) {
            console.log('@@ clicked outside', e.target);
            setVisible(false)
        } else{
            console.log('@@ clicked inner', e.target);
            setVisible(true)
        }
    }

    return (
        <Wrapper ref={dom}>
            <Screen/>
            <Button onClick={()=> setVisible(!visible)}>
                <FiMenu/>
            </Button>
            {/* 추후 애니메이션 추가 */}
            {
                visible &&
                    <Menu mode={'inline'} style={{width: '100%'}}/>
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background:rgba(0,0,0,.2);
`;

const Screen = styled.div`
  position: fixed;
  z-index: 1002;
  top: 48px; // header 높이 추가
  left: 0;
  right: 0;
  bottom: 0;
`;

export default SmallNavbar;