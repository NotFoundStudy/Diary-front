import React from 'react';
import styled from "styled-components";

const ToastMessage = (props) => {

    const {
        message
    } = props;

    return (
        <Wrapper>
            {message}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  z-index: 100;
  padding: 13px 29px;
  box-shadow: 0 0 10px rgba(0,0,0,.25);
  border-radius: 25px;
  background: #1f6cb9;
  font-size: 15px;
  font-weight: 400;
  color:#fff;
`;

export default ToastMessage;