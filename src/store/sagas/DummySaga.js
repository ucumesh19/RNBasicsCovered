import { put, call, takeLatest, select } from 'redux-saga/effects';
import { types } from '../ActionType';

// const reducerState = (state) => state.Reducer;

//to check our API is working and to display data as list fetch from API
function* checkSaga(data) {
    try {

        //  let reducerData = yield select(reducerState);
        // const json = yield call(fetch, "https://jsonplaceholder.typicode.com/users");

        //GET 
        const response1 = yield call(() =>
            fetch("https://jsonplaceholder.typicode.com/posts",
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: null
                }).then(response => response.json()).
                then(myJson => myJson))

        console.log(response1);
        console.log('Saga Data', data.payload);

        //same as dispatch,used to show API data in UI
        yield put({
            type: types.STORE_DUMMY_SAGA,
            payload: response1
        })
    }
    catch (err) {
        console.log(err);
    }
}

//to display individual API data from API list 
function* displayDummySaga(value) {
    try {

        const response2 = yield call(() =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${value.payload}`,
                {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: null
                }).then(response => response.json()).
                then(myJson => myJson))

        console.log(response2);

        yield put({
            type: types.SHOW_DATA_FROM_API,
            payload: response2
        })


    }
    catch (err) {
        console.log(err);
    }
}

// function* testSaga(data) {
//     try {

//         //POST 
//         const response3 = yield call(() =>
//             fetch("https://jsonplaceholder.typicode.com/posts",
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify({
//                         title: 'bar',
//                         body: 'foo',
//                         userId: 1,

//                     })
//                 }).then(response => response.json()).
//                 then(myJson => myJson))

//         console.log(response3);
//         // console.log('TEST SAGA DATA', data.payload);

//         // yield put({
//         //     type: types.DISPLAY_DUMMY_SAGA,
//         //     payload: id
//         // })
//     }
//     catch (err) {
//         console.log(err);
//     }
// }


function* deleteDummySaga(value) {
    //to delete data from API
    try {

        const response4 = yield call(() =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${value.payload}`,
                {
                    method: 'DELETE',
                }).then(res => res.json()))

        console.log(response4);

        yield put({
            type: types.DISPLAY_DUMMY_SAGA,
            payload: value.payload
        })
    }
    catch (err) {
        console.log(err);
    }
}

//to edit and update data from API
function* updateDummySaga(editData) {
    try {
        const { item, editTitle, editUserId } = editData.payload

        let body = JSON.stringify({
            id: item.id,
            title: editTitle,
            body: item.body,
            userId: editUserId,
        })
        const response5 = yield call(() =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${item.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: body
                }).then(response => response.json()).
                then(myJson => myJson))

        console.log(response5);
        yield put({
            type: types.DISPLAY_DUMMY_SAGA,
            payload: item.id
        })

    }
    catch (err) {
        console.log(err);
    }
}

export default function* watcherSaga() {
    console.log("Hello Saga!!!");
    yield takeLatest(types.CHECK_SAGA, checkSaga);
    yield takeLatest(types.DISPLAY_DUMMY_SAGA, displayDummySaga);
    yield takeLatest(types.DELETE_DUMMY_SAGA, deleteDummySaga);
    yield takeLatest(types.UPDATE_DUMMY_SAGA, updateDummySaga);
    // yield takeLatest(types.TEST_SAGA, testSaga);

}