import {AppstoreOutlined} from "@ant-design/icons";
import React from "react";

const initialState = {
    selectedPost: null,
    currentSideMenu: null,
};

// app 공통 state (toastMessage, sideBarMenu, 기타 ..etc)
export const Action = {
    Types: {
        UPDATE_STATE: '@APP/UPDATE_STATE',
        CLEAR_STORE: '@APP/CLEAR_STORE',

        SET_TOAST_MESSAGE: '@APP/SET_TOAST_MESSAGE',
        SET_SIDE_MENU: '@APP/SET_SIDE_MENU',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE
        }),
        setToastMessage: (message) => ({
            type: Action.Types.SET_TOAST_MESSAGE,
            message
        }),
        setSideMenu: (key) => ({
            type: Action.Types.SET_SIDE_MENU,
            key
        })
    }
};

const sideMenus = [
    {
        head: 'Introduction & Research',
        list: [
            {
                key: '/introduction',
                icon: <AppstoreOutlined/>,
                name: 'Introduction',
                sub_menu: [],
            },
            {
                key: '/research',
                icon: <AppstoreOutlined/>,
                name: 'Research',
                sub_menu: [],
            },
        ],
    },
    {
        head: 'Professor',
        list: [
            {
                key: '/professor',
                icon: <AppstoreOutlined/>,
                name: 'Professor',
                sub_menu: []
            }
        ]
    },
    {
        head: 'Member',
        list: [
            {
                key: '/member/current',
                icon: <AppstoreOutlined/>,
                name: 'Current Member',
                sub_menu: []
            },
            {
                key: '/member/alumni',
                icon: <AppstoreOutlined/>,
                name: 'Alumni',
                sub_menu: []
            }
        ]
    },
    {
        head: 'Publication',
        list: [
            {
                key: '/publication',
                icon: <AppstoreOutlined/>,
                name: 'Publication',
                sub_menu: []
            },
        ]
    },
    {
        head: 'Lecture',
        list: [
            {
                key: '/lecture/1',
                icon: <AppstoreOutlined/>,
                name: 'Lecture1',
                sub_menu: []
            },
            {
                key: '/lecture/2',
                icon: <AppstoreOutlined/>,
                name: 'Lecture2',
                sub_menu: []
            },
        ]
    },
    {
        head: 'Community',
        list: [
            {
                key: '/community/notice',
                icon: <AppstoreOutlined/>,
                name: 'Notice',
                sub_menu: []
            },
            {
                key: '/community/gallery',
                icon: <AppstoreOutlined/>,
                name: 'Gallery',
                sub_menu: []
            },
            {
                key: '/community/board',
                icon: <AppstoreOutlined/>,
                name: 'Board',
                sub_menu: []
            },
        ]
    }
]; // whole menu

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
        case Action.Types.SET_SIDE_MENU:
            const result = sideMenus.filter(item => item.head.toLowerCase() === action.key.toLowerCase())[0];
            return {
                ...state,
                currentSideMenu: result
            };
    }
}