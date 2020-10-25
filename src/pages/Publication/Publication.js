import React from 'react';
import styled from "styled-components";
import {Collapse, Table, Tabs} from "antd";
import PublicationItems from "./components/PublicationItems";
import {mock} from "../../mock/mock";
import {useSelector} from "react-redux";

const {TabPane} = Tabs;
const {Panel} = Collapse;

const tabFrame = [
    {
        key: 1,
        title: '논문'
    },
    {
        key: 2,
        title: '단행본'
    },
    {
        key: 3,
        title: '학술회의참가'
    },
    {
        key: 4,
        title: '특허출원 및 등록'
    },
    {
        key: 5,
        title: '전시발표창작'
    },
    {
        key: 6,
        title: '학술상등 수상사항'
    },
    {
        key: 7,
        title: '초청강연'
    },
];

const Publication = (props) => {

    const list = mock.publication[0].data;
    console.log('@@ list', list);

    return (
        <Wrapper>
            <PublicationItems item={list[0]}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
`;

export default Publication;