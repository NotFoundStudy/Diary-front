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
  margin-bottom: 2rem;
  // rwd
  @media only screen and (max-width: 600px) {
    padding: 0 12px;
  }
`;

const Title = styled.span`
  padding-bottom: 0.7rem;
  border-bottom: 3px solid #2d2d2d;
  text-transform: capitalize;
  font-size: 1.5rem; //37px;
  font-weight: 600;
  color: ${props => props.color || '#2d2d2d'};
`;


export default PageTitle;