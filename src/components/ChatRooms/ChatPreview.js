import React from 'react';
import styled from "styled-components";
import {navigate} from "../../helper/historyHelper";
import Images from "../../assets/image";
import {chatsCreators} from "../../redux/actionCreators";

const ChatPreview = (props) => {

    const {
        item,
    } = props;

    return (
        <Wrapper onClick={() => {
            chatsCreators.updateState({selectedChatId: item.chatId})
            navigate(`/direct/${item.chatId}`)
        }}>
            <Thumb src={item.src || Images.defaultUserImage}/>
            <Desc>
                <Name>Alica</Name>
                <Message>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, tempore??
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, tempore??</Message>
            </Desc>
            <Date>오후 10:11</Date>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  padding: 25px 25px;
  cursor:pointer;
  & + & {
    border-top:1px solid #ddd;
  }
`;

const Thumb = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 8px; 
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-grow: 1;
  padding-left: 17px;
`;
const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color:#575757;
`;
const Message = styled.div`
  max-height: 38px;
  overflow:hidden;
  font-size: 15px;
  font-weight: 400;
  color:#999;
`;
const Date = styled.div`
  width: 70px;
  flex-shrink: 0;
  padding-left: 10px;
  align-items: start;
  font-size: 14px;
  font-weight: 400;
  color:#999;
`;
export default ChatPreview;