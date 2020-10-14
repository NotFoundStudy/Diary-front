import React from 'react';
import styled from "styled-components";
import Shortcuts from "./Shortcuts";
import Navbar from "./Navbar";

const index = (props) => {

    return (
        <Wrapper>
            <Shortcuts/>
            <Navbar/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default index;