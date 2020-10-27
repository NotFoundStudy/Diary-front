import React, {useEffect} from 'react';
import styled from "styled-components";
import PageTitle from "../../../components/Titles/PageTitle";
import {Col, Row} from 'antd';
import Detail from "../../../components/Post/PhotoPost/Detail";
import Sidebar from "../../../components/Layout/Sidebar/Sidebar";

// sidebar
const sideMenu = {
    head: 'current member',
    list: [
        {
            key: '/currentMember',
            icon: '',
            name: 'Current Member',
            sub_menu: [],

        },
        {
            key: '/alumni',
            icon: '',
            name: 'Alumni',
            sub_menu: [],
        },
    ]
}

const CurrentMember = (props) => {

    useEffect(() => {
        //fetch item by url - id

    }, [])

    return (
        <Wrapper>
            <Row gutter={34} justify={'center'}>
                <Col flex={'100px'}>
                    <Sidebar list={sideMenu}/>
                </Col>
                <Col style={{flexGrow: 1}}>
                    <PageTitle title={'current member'}/>
                    <Detail/>
                </Col>
            </Row>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  .ant-radio-group{
    margin-bottom: 20px;
  }
`;

export default CurrentMember;