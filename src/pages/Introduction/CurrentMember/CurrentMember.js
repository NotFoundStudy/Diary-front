import React from 'react';
import styled from "styled-components";
import List from "../../../components/Post/PhotoPost/List";
import {mock} from "../../../mock/mock";

const CurrentMember = (props) => {

    return (
        <Wrapper>
        {/* 탭 : currentMemeber |  Alumni */}
        {/* 서브 탭 : Post Doc ... */}
            <List list={mock.currentMember}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default CurrentMember;