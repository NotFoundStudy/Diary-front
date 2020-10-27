const initialState = {
    user: null,
};

// login 관련 state
export const Action = {
    Types: {
        UPDATE_STATE: '@USER/UPDATE_STATE',
        CLEAR_STORE: '@USER/CLEAR_STORE',

        REGISTER : '@USER/REGISTER',
        REGISTER_CONFIRM : '@USER/REGISTER_CONFIRM',
        LOGIN: 'LOGIN',
        LOGOUT: 'LOGOUT',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE
        }),

        register: (values) => ({
            type: Action.Types.REGISTER,
            values
        }),
        registerConfirm: (confirmCode) => ({
            type: Action.Types.REGISTER_CONFIRM,
            confirmCode
        }),
        login: (userInfo) => ({
            type: Action.Types.LOGIN,
            userInfo
        }),
        logout: () => ({ // accessToken - localStorage
            type: Action.Types.LOGOUT
        }),
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
        case Action.Types.UPDATE_STATE :
            return {
                ...state,
                ...action.payload
            };
        case Action.Types.CLEAR_STORE:
            return initialState;
    }
}