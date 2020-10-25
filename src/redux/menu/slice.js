import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const name = 'Menu';

const initialState = {
    sideMenu: { // dummy
        head: 'menuHead',
        list: [
            {
                key: '/introduction',
                icon: '',
                name: 'Introduction',
                sub_menu: []
            },
            {
                key: '/introduction/professor',
                icon: '',
                name: 'Professor',
                sub_menu: []
            },
            {
                key: '/introduction/people',
                icon: '',
                name: 'People',
                sub_menu: [
                    {
                        key: '/introduction/people/currentMember',
                        icon: '',
                        name: 'currentMember',
                    },
                    {
                        key: '/introduction/people/alumni',
                        icon: '',
                        name: 'alumni',
                    },
                ]
            }
        ]
    }
};

const reducer = {
    updateState: (state, { payload }) => {
        state = {
            ...state,
            ...payload,
        };
    },

};

const slice = createSlice({
    name,
    initialState,
    reducer,
});

console.log('@@ slice.menu', slice);
export const Name = slice.name;
export const Reducer = slice.reducer;
export const Action = slice.actions;