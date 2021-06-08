import { types } from '../ActionType';

//initialstate is used so that we can store the results based on our action calling 
const initialState = {
    userData: null,
    data: null,
    dummyData: null,
    dummyListData: null,
    sagaList: null,
    deleteData: null,
    updatedData: null,
    testSaaga: null
}

// ...state is used here so only the current state get updated and rest of the remaining will be unaffected by this in initialstate
export const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SIGN_UP_DATA:
            return { ...state, userData: action.payload }

        case types.UPDATE_DATA:
            return { ...state, userData: action.payload }

        case types.CHECK_SAGA:
            return { ...state, data: action.payload }

        case types.STORE_DUMMY_SAGA:
            return { ...state, dummyData: action.payload }

        case types.SHOW_DATA_FROM_API:
            return { ...state, dummyListData: action.payload }

        case types.DISPLAY_DUMMY_SAGA:
            return { ...state, sagaList: action.payload }

        case types.DELETE_DUMMY_SAGA:
            return { ...state, deleteData: action.payload }

        case types.UPDATE_DUMMY_SAGA:
            return { ...state, updateData: action.payload }

        case types.TEST_SAGA:
            return { ...state, testSaaga: action.payload }
        default:
            return state;
    }
}