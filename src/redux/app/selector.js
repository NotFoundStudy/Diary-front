import { createSelector } from '@reduxjs/toolkit';

// state getter method
const getUser = (state) => state.app.user;
const getInputs = (state) => state.app.inputs;

const selectAllState = createSelector(
    getUser,
    getInputs,
    ( user, inputs ) => {
        return { user, inputs };
    }
);

export const selector = {
    all: selectAllState,
};