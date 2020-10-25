import React from 'react';
import styled from "styled-components";
import PageTitle from "../../components/Titles/PageTitle";
import Viewer from "../../components/Editor/Viewer";
import {mock} from "../../mock/mock";

const Research = (props) => {

    return (
        <Wrapper>
           <PageTitle title={'Research'}/>

           <Viewer initialValue={mock.researchHtml}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Research;