import React from 'react';
import styled from "styled-components";
import ChatPreview from "./ChatPreview";

const ChatRooms = (props) => {

    const {
        list
    } = props;

    return (
        <Wrapper>
            {
                list.map(item => <ChatPreview item={item} key={item.id}/>)
            }
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y:scroll;
  border-radius: 25px 25px 0 0;
  background:#fff;
  padding: 25px 0;
`;

export default ChatRooms;