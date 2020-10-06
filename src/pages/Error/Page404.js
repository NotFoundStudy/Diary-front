import React from 'react';
import styled from "styled-components";

const Page404 = (props) => {

    return (
        <Wrapper>
           해당 페이지가 없습니다.
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export default Page404;