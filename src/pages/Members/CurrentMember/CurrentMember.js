import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import List from "../../../components/Post/PhotoPost/List";
import {mock} from "../../../mock/mock";
import PageTitle from "../../../components/Titles/PageTitle";
import {Radio} from 'antd';

let list; // for mock

const CurrentMember = (props) => {

    useEffect(()=>{
        // fetch current
        list = mock.members.current.list;
    },[])

    return (
        <Wrapper>
            <PageTitle title={'Members'}/>

            <Radio.Group
                defaultValue="current"
                onChange={(e) => {
                    if(e.target.value === 'current'){
                        // only never fetched, fetch. by comparing whether store's list is null
                        // if(!store.members.current){
                        //     dispatch()
                        // }
                        list = mock.members.current.list;
                    }
                    if(e.target.value === 'alumni'){
                        // only never fetched, fetch. by comparing whether store's list is null
                        // if(!store.members.alumni){
                        //     dispatch()
                        // }
                        list = mock.members.alumni.list;
                    }
                }}>
                <Radio.Button value="current">Current Member</Radio.Button>
                <Radio.Button value="alumni">Alumni</Radio.Button>
            </Radio.Group>

            <List list={list}/>

        </Wrapper>
    )
};

const Wrapper = styled.div`
  .ant-radio-group{
    margin-bottom: 20px;
  }
`;

export default CurrentMember;