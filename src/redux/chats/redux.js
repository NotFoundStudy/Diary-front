export const Action = {
    Types: {
        UPDATE_STATE: '@CHATS/UPDATE_STATE',
        CLEAR_STORE: '@CHATS/CLEAR_STORE',

        FETCH_CHATS: '@CHATS/FETCH_CHATS',
        FETCH_CHAT: '@CHATS/FETCH_CHAT',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        fetchChats: () => ({ // multiple
            type: Action.Types.FETCH_CHATS,
        }),
        fetchChat: (chatId) => ({ // single
            type: Action.Types.FETCH_CHAT,
            chatId
        }),
    }
};


const initialState = {
    selectedChatId: '', // id to trigger fetch CHAT
    selectedChat: null, // fetch CHAT result
    chatList: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return {...state}
        case Action.Types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
    }
}


