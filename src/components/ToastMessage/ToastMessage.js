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
  bottom: 20px;
  z-index: 100;
  padding: 10px 25px;
  border-radius: 25px;
  background: #0f9ee7;
  font-size: 15px;
  font-weight: 500;
  color:#fff;
`;

export default ToastMessage;