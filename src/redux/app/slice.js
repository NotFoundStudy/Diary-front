import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inputs: {
        email: '',
        password: '',
    },
    user: {
        email: '',
        nickname: '',
        accessToken: '',
        loading: false,
        error: null,
    }, // Login data
    toastMessage: '',
};

const reducers = {
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
const name = 'APP';

const slice = createSlice({
    name,
    initialState,
    reducers,
});

export const Name = slice.name;
export const Reducer = slice.reducer;
export const Action = slice.actions;