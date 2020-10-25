import React, {useEffect} from 'react';
import styled from "styled-components";
import PageTitle from "../../components/Titles/PageTitle";
import Viewer from "../../components/Editor/Viewer";
import {mock} from "../../mock/mock";

const Contact = (props) => {

    useEffect(()=>{
        // 1. fetch editor written HTML, named value/initialValue?
        // 2. RoutePath - by /index.js ? (X) => by each page
    },[])

    return (
        <Wrapper>
           <PageTitle title={'Contact'}/>
            <Viewer initialValue={mock.viewerHtml}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Contact;