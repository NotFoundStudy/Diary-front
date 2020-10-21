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
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Title = styled.span`
  padding-bottom: 15px;
  border-bottom: 3px solid #2d2d2d;
  text-transform: capitalize;
  font-size: 37px;
  font-weight: 600;
  color: ${props => props.color || '#2d2d2d'};
`;


export default PageTitle;