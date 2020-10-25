import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'APP';
const baseURL = '';

const initialState = {
    user: { // Login data
        email: '',
        studentId : '',
        password: '',
        name: '',
        role: '',
        accessToken: '',
    },
    load : {
        isLoading: false,
        errorMessage : '',
    },
    toastMessage: '',
};

const reducers = {
    changeUserInfo: (state, { payload }) => {
        const { name, value } = payload;
        state.user = {
            ...state.user,
            [name]: value,
        };
    },
    registRequest : (state) => {
        const {user} = state;
        // regist request
        

    },
	loginRequest: (state, {payload}) => {
        console.log('@@ slice~', payload);
        state.user = {
            ...state.user
        };
        state.load = {
            isLoading : true,
            errorMessage : '',
        }

        //loginRequest
	},
    loginSuccess: (state, { payload: user }) => {
        state.user = {
            ...state.user,
            ...user,
        };
        
        state.load = {
            isLoading : false,
            errorMessag : '',
        }
    },
    loginFail: (state, { payload: error }) => {
        state.user = {
            ...state.user,
        };
        
        state.load = {
            isLoading : false,
            errorMessag : 'login Fail',
        }
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
    reducers,
});

export const Name = slice.name;
export const Reducer = slice.reducers;
export const Action = slice.actions;