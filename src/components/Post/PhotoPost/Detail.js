import React, {useEffect} from 'react';
import styled from "styled-components";

const Detail = (props) => {

    const {
        item
    } = props;

    useEffect(()=>{
        //fetch by item.id
    },[])

    return (
        <Wrapper>
           Detail
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Detail;