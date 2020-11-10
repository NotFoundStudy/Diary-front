import React from "react";
import styled from "styled-components";

const IconButton = (props) => {
  const {
    icon,
    children, // text or something
    onClick,
  } = props;

  return (
    <Wrapper onClick={onClick}>
      {icon}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.size ? `${props.size}px` : "23px")};
  cursor: pointer;
`;

export default IconButton;
