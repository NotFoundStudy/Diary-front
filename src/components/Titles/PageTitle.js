import React from 'react';
import styled from "styled-components";

const PageTitle = (props) => {

    const {
        title,
        color, // title font color
    } = props;

    return (
        <Wrapper>
            <Title color={color}>{title}</Title>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 25px;
`;

const Title = styled.div`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 800;
  color: ${props => props.color || '#fff'};
`;


export default PageTitle;