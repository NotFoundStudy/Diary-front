import React from 'react';
import styled from "styled-components";

const Shortcuts = (props) => {

    const {
       list,
       style
    } = props;

    return (
        <Wrapper style={style}>
            {
                list.map(item =>
                <Link href={item.to}>{item.name}</Link>)
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;
const Link = styled.a`
  padding: 0 10px;
  color:#000;
  &:last-child{
    padding-right: 0;
  }
`;

export default Shortcuts;