import axios from 'axios';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SETDATA = 'SETDATA';
export const SET_SINGLE_USER_DATA = 'SET_SINGLE_USER_DATA';

export const setData = (resData) => {
    return {
        type:SETDATA,
        resData
    }
}

export const getData = () => {
    return dispatch => {
        axios.get('https://api.github.com/users/mralexgray/repos')
            .then(response => {
                dispatch(setData(response.data))
            });
    }
}

export const setSingleUserData = (responseSingleData) => {
    return {
        type:SET_SINGLE_USER_DATA,
        responseSingleData
    }
}

export const getSingleUserData = (name) => {
    return dispatch => {
        axios.get('https://api.github.com/repos/mralexgray/'+name)
            .then(response => {
                dispatch(setSingleUserData(response.data))
            });
    }
}