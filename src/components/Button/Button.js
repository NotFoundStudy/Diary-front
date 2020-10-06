import React from 'react';
import styled from "styled-components";

const Button = (props) => {
    const {
        children,
    } = props;

    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 20px;
  border-radius: 25px;
  border: 1px solid ${props => props.border || `#08c`};
  background-color: ${props => props.background || `#08c`};
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color || `#fff`};
  transition:all 0.2s ease-out;
  cursor:pointer;
  &:hover, &:focus{
    opacity: 0.8;
  }
`;

export default Button;