export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE',
        CLEAR_STORE: '@APP/CLEAR_STORE',
        SET_TOAST_MESSAGE: '@APP/SET_TOAST_MESSAGE',

        GET_USER_TOKEN: '@APP/GET_USER_TOKEN',
        LOG_IN: '@APP/LOG_IN',
        LOG_OUT: '@APP/LOG_OUT',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE,
        }),
        setToastMessage: (message) => ({
            type: Action.Types.SET_TOAST_MESSAGE,
            message
        }),

        getUserToken: () => ({
            type: Action.Types.GET_USER_TOKEN,
        }),
        logIn: (userInfo) => ({
            type: Action.Types.LOG_IN,
            userInfo
        }),
        logOut: () => ({
            type: Action.Types.LOG_OUT
        })
    }
};


const initialState = {
    user: null, // Login data
    toastMessage: ''
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


