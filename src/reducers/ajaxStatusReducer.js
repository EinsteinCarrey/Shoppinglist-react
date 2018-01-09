import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsWithSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

function actionTypeEndsWithFail(type) {
    return type === actionTypes.TERMINATE_AJAX_CALL;
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {

    if(action.type === actionTypes.INITIATE_AJAX_CALL){
        return state + 1;
    }else if (actionTypeEndsWithSuccess(action.type) || actionTypeEndsWithFail(action.type)){
        return state - 1;
    }

    return state;
}