import * as actionTypes from "./actionTypes";
import {initiateAjaxCall, terminateAjaxCall} from "./ajaxStatusActions";
import {Api} from "../api";
import {showNotification} from "../components/helperComponents/sharedFunctions";


export function authenticateUser(user) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        user.username = user.username.toLowerCase();
        return Api.loginUser(user).then(response => {
            localStorage.setItem('token', response.token);
            let token = localStorage.getItem('token');
            return {type: actionTypes.AUTHENTICATE_USER_SUCCESS, token};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}

export function createUser(user) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createUser(user).then(user => {
            return {type: actionTypes.CREATE_USER_SUCCESS, user};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}