import React from 'react';
import styled from "styled-components";
import ButtonMore from "../ButtonMore/ButtonMore";

const PageTitle = (props) => {

    const {
        title,
        options,
        color, // title font color
    } = props;

    return (
        <Wrapper>
            <Title color={color}>{title}</Title>
            <div style={{justifyContent: 'flex-end'}}>
                <ButtonMore options={options}/>
            </div>
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