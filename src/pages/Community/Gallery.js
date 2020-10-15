import React from 'react';
import styled from "styled-components";
import PageTitle from "../../components/Titles/PageTitle";
import Detail from "../../components/Post/Card/Detail";

import {mock} from "../../mock/mock";
import List from "../../components/Post/Card/List";

const Gallery = (props) => {

    return (
        <Wrapper>
           <PageTitle title={'Gallery'}/>
           {/*<List/>*/}

           {/*ui test*/}
           <Detail item={mock.gallery[0]} list={mock.gallery}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Gallery;