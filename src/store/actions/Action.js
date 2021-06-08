import { types } from '../ActionType';

//These are the actions for our store and we will use
// this to store data through reducer via actionType

export const signUpData = (value) => ({

    type: types.SIGN_UP_DATA,
    payload: value

});

export const updateData = (updatedValue) => ({

    type: types.UPDATE_DATA,
    payload: updatedValue

});