import { createSlice } from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
    inputs: {
        email: '',
        password: '',
    },
    user: { // Login data
        email: '',
        nickname: '',
        accessToken: '',
        loading: false,
        error: null,
    },
    toastMessage: '',
};

const reducer = {
    changeInput: (state, { payload: input }) => {
        const { name, value } = input;
        state.inputs = {
            ...state.inputs,
            [name]: value,
        };
    },
	loginRequest: (state, { payload }) => {
        state.user = {
            ...state.user,
            loading: true,
        };
	},
    loginSuccess: (state, { payload: user }) => {
        state.user = {
            ...state.user,
            ...user,
            loading: false,
            error: null,
        };
    },
    loginFail: (state, { payload: error }) => {
        state.user = {
            ...state.user,
            loading: false,
            error,
        };
    },
    updateState: (state, { payload }) => {
        state = {
            ...state,
            ...payload,
        };
    },
    logout: (state) => {},
    setToastMessage: () => {},
};

const slice = createSlice({
    name,
    initialState,
    reducer,
});

export const Name = slice.name;
export const Reducer = slice.reducer;
export const Action = slice.actions;