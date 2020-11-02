const initialState = {
    editor: null,
};

export const Action = {
    Types : {
        UPDATE_STATE: '@USER/UPDATE_STATE',
        CLEAR_STORE: '@USER/CLEAR_STORE',

        INSERT: '@EDITOR/INSERT',
        UPDATE: '@EDITOR/UPDATE'
    },
    Creators: {
        insert : (body) => ({
            type: Action.Types.INSERT,
            body,
        }),
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case Action.Types.INSERT : 
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}