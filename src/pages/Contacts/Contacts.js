import React, {useEffect} from 'react';
import styled from "styled-components";
import UserThumbsWrapper from "../../components/UserThumbs/UserThumbsWrapper";
import {useSelector} from "react-redux";
import SectionTitle from "../../components/Titles/SectionTitle";
import ChatRooms from "../../components/ChatRooms/ChatRooms";
import {mock} from "../../mock/mock";

const Contacts = (props) => {

    // const {chatList} = useSelector(state => state.chats.chats);
    const chatList = mock.chatList;

    return (
        <Wrapper>
            <SectionTitle title={'Favorite'}/>
            <UserThumbsWrapper list={chatList}/>

            <ChatRooms list={chatList}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
   background:#08c;
`;

export default Contacts;