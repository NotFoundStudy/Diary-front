import React from 'react';
import styled, {keyframes} from "styled-components";
import {AiOutlineLoading3Quarters} from "react-icons/all";

const Loading = (props) => {

    return (
        <Wrapper>
            <Rotate>
                <AiOutlineLoading3Quarters/>
            </Rotate>
        </Wrapper>
    )
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Wrapper = styled.div`
`;

export default Loading;