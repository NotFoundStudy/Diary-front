import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/all";
import Menu from "../../Menu/Menu";

const DropdownNavbar = (props) => {
  const dom = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  function handleClickOutside(e) {
    const domNode = dom.current;

    if (!domNode || !domNode.contains(e.target)) {
      console.log("@@ clicked outside", e.target);
      setVisible(false);
    } else {
      console.log("@@ clicked inner", e.target);
      setVisible(true);
    }
  }

  return (
    <Wrapper>
      {visible && <Screen />}
      <Logo src={Image.logoUniversity} />
      <DropMenuWrap ref={dom}>
        <FiMenu size={20} />
        {visible && <DropMenu mode={"inline"} />}
      </DropMenuWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  padding: 4px 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 33px;
`;

const Screen = styled.div`
  position: fixed;
  z-index: -1;
  top: 48px; // header 높이 추가
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const DropMenuWrap = styled.div`
  padding-top: 6px;
  background: #fff;
`;

const DropMenu = styled(Menu)`
  position: absolute;
  top: 35px;
  left: 0;
  width: 100%;
`;
export default DropdownNavbar;
