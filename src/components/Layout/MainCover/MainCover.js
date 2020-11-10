import React from "react";
import styled from "styled-components";
import RoutePath from "../../RoutePath/RoutePath";
import Navbar from "../Navbar";
import Container from "../Container/Container";
import Images from "../../../assets/image";

const MainCover = (props) => {
  return (
    <Wrapper>
      <BackgroundWrap>
        <Container>
          <img src={Images.logoUniversity} alt="" className={"header-logo"} />
          <Navbar layout={"overlay"} />
        </Container>
      </BackgroundWrap>
      <RoutePathWrap>
        <Container>
          <RoutePath />
        </Container>
      </RoutePathWrap>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #fff;
  .header-logo {
    // temp
    height: 70px;
    margin-top: 30px;
  }
`;

const BackgroundWrap = styled.div`
  height: 195px;
  background-image: url(https://images.unsplash.com/photo-1581091014534-898da33e356e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const RoutePathWrap = styled.div`
  background: #f1f1f1;
`;

export default MainCover;
