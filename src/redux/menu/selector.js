import { createSelector } from '@reduxjs/toolkit';

// state getter method
const getSideMenu = (state) => state.menu.sideMenu;
const getLoad = (state) => state.menu.load;
const getToastMessage = (state) => state.menu.toastMessage;

const selectAllState = createSelector(
    getSideMenu,
    getLoad,
    getToastMessage,
    ( user, load, toastMessage ) => {
        return { user, load, toastMessage };
    }
);

const selectSideMenuState = createSelector(
    getSideMenu,
    (sideMenu) => {
        return {sideMenu};
    }
)

export const selector = {
    all: selectAllState,
    sideMenu: selectSideMenuState,
};