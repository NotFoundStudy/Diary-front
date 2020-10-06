import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Loading from "../../components/Loading/Loading";
import Chat from "../../components/ChatRooms/Chat";
import {chatsCreators} from "../../redux/actionCreators";
import {mock} from "../../mock/mock";

const Direct = (props) => {

    // const {selectedChatId, selectedChat} = useSelector(state => state.chats);
    //
    // useEffect(()=>{
    //     // fetch Chat info
    //     // fetch only recent, not whole messages (cache)
    //     if(selectedChatId){
    //         chatsCreators.fetchChat(selectedChatId)
    //     } else { // if no selectedChatId in store, as a next step check,
    //         // get from url
    //         const urlId = ...
    //         chatsCreators.fetchChat(selectedChatId)
    //     }
    // },[selectedChatId])

    const selectedChat = mock.chatList[0];

    if(!selectedChat){ // change to !selectedChat => 해당 채팅방이 없습니다, nodata는 필요없겠다
        return <Loading/>;
    }

    return (
        <div>
           <Chat item={selectedChat}/>
        </div>
    )
};

export default Direct;