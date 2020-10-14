import React from 'react';
import styled from "styled-components";
import RoutePath from "../../RoutePath/RoutePath";
import Header from "../Header";
import Container from "../Container/Container";

const MainCover = (props) => {

    return (
        <Wrapper>
            <Background>
                <Container>
                    <Header/>
                </Container>
            </Background>
            <RoutePathWrap>
                <Container>
                    <RoutePath/>
                </Container>
            </RoutePathWrap>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  background: pink;
`;

const Background = styled.div`
  height: 250px;
`;

const RoutePathWrap = styled.div`
  background:#f1f1f1;
`;

export default MainCover;