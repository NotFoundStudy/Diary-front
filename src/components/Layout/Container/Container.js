import React from 'react';
import styled from "styled-components";

const Container = (props) => {
const{
    children,
    style
} = props;
    return (
        <Wrapper style={style}>
            {children}
        </Wrapper>
    )
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export default Container;