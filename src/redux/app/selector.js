import { createSelector } from '@reduxjs/toolkit';

// state getter method
const getUser = (state) => state.app.user;
const getLoad = (state) => state.app.load;
const getToastMessage = (state) => state.app.toaseMessage;

const selectAllState = createSelector(
    getUser,
    getLoad,
    getToastMessage,
    ( user, load, toastMessage ) => {
        return { user, load, toastMessage };
    }
);

const selectUserState = createSelector(
    getUser,
    (user) => {
        return {user};
    }
)

const selectLoadState = createSelector(
    getLoad,
    (load) => {
        return {load};
    }
)

export const selector = {
    all: selectAllState,
    user : selectUserState,
    load : selectLoadState,
};