import * as actionTypes from './actions';

const initialState={
    userData:[],
    singleUserData:[]
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.SETDATA:
            return {
                ...state,
                userData:action.resData
            }
        case actionTypes.SET_SINGLE_USER_DATA:
            return {
                ...state,
                singleUserData:action.responseSingleData
            }                          
    }
    return state;
}

export default reducer;