import React, {useEffect} from 'react';
import styled from "styled-components";
import Viewer from "../../../components/Editor/Viewer";
import PageTitle from "../../../components/Titles/PageTitle";
import {mock} from "../../../mock/mock";
import RightWrap from "../../../components/HalfWrap/RightWrap";
import {Button} from "antd";

const Introduction = (props) => {

    useEffect(()=>{
        // 1. fetch editor written HTML, named value/initialValue?
        // 2. RoutePath - by /index.js ? (X) => by each page
    },[])

    return (
        <Wrapper>
           <PageTitle title={'Introduction'}/>
           <RightWrap>
               <Button>등록/수정</Button>
           </RightWrap>
            <Viewer initialValue={mock.viewerHtml}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Introduction;