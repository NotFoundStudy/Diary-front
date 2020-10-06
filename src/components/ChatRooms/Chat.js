import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import IconButton from "../Button/IconButton";
import {HiOutlineMenu, IoMdArrowRoundBack} from "react-icons/all";
import Loading from "../Loading/Loading";
import {chatsCreators} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import {navigate} from "../../helper/historyHelper";

const Chat = (props) => {

    const {
        item
    } = props;

    return (
        <Wrapper>
            <Head>
                {/*targetUser_info*/}
                <IconButton icon={<IoMdArrowRoundBack/>} onClick={() => navigate('/contacts')}/>
                <ChatName>{item.targetUser.name}</ChatName>
                <IconButton icon={<HiOutlineMenu/>}
                            size={29}
                            onClick={() => {
                            }}/>
            </Head>
            <Body>
                {/*chat*/}
                {
                    item.message.map(bubble =>
                        bubble.userId !== item.user.id
                            ? <BubbleWrap key={bubble.date}>
                                <BubbleThumb src={item.targetUser.profile_url}/>
                                <BubblePack>
                                    <BubbleName>{item.targetUser.name}</BubbleName>
                                    <Bubble>{bubble.text}</Bubble>
                                </BubblePack>
                            </BubbleWrap>
                            : <BubbleWrap key={bubble.date} isMe={true}>
                                <BubblePack>
                                    <Bubble>{bubble.text}</Bubble>
                                </BubblePack>
                            </BubbleWrap>
                    )
                }
            </Body>
            <Tail>
                {/*input*/}
            </Tail>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Head = styled.div`
  display: flex;
  flex-direction: row;
  padding: 7px 0;
  box-shadow: 0 0 0 8px rgba(0,0,0, .3);
`;
const ChatName = styled.div`
  flex-grow: 1;
  align-self: center;
  padding: 0 7px;
  font-size: 15px;
  font-weight: 600;
`;
const Body = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow:scroll;
  padding: 15px 10px;
  background:#08c;
  position: relative;
  &:before{ // top, bottom button
    content: '';
  }
`;

const BubbleWrap = styled.div`
  display: flex;
  & + & {
    margin-top: 10px;
  };
  ${props => props.isMe && css`
      justify-self: flex-end;
      flex-direction: row-reverse;
      ${Bubble}{
            background: yellow;
      }
  `};
`;

const BubbleThumb = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin-right: 7px;
`;

const BubblePack = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const BubbleName = styled.div`
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: 400;
    color:#232323;
`;
const Bubble = styled.div`
  display: inline-flex;
  border-radius: 15px;
  padding: 9px 8px;
  background:#fff;
  font-size: 15px;
  color:#000;
  & + & {
    margin-top: 5px;
  }
  .date {
    font-size: 12px;
    color:#999;
  }
`;
const Tail = styled.div`
`;

export default Chat;