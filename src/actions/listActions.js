import * as actionTypes from './actionTypes';
import {Api} from "../api";
import {initiateAjaxCall, terminateAjaxCall} from "./ajaxStatusActions";
import {showNotification} from "../components/helperComponents/sharedFunctions";
// import {loadProgressBar} from 'axios-progress-bar';

export function createList(shoppingList){
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createList(shoppingList).then(() => {
            dispatch(loadShoppingLists());
            return {type: actionTypes.CREATE_LIST_SUCCESS};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}

export function updateShoppingList(shoppingList){
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.updateList(shoppingList).then((list) => {
            dispatch(loadShoppingLists());
            return {type: actionTypes.UPDATE_LIST_SUCCESS, list};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}

export function deleteShoppingList(shoppingList) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.deleteList(shoppingList).then(() => {
            dispatch(loadShoppingLists());
            dispatch({type: actionTypes.DELETE_LIST_SUCCESS});
        }).catch(error => {
            showNotification('error', error);
        });
    };
}

export function initializeListEditor(list) {
    return {type: actionTypes.INITIALIZE_LIST_EDITOR, list};
}

export function loadShoppingLists(){
    return function (dispatch) {
        return Api.getLists().then(lists => {
            dispatch({type: actionTypes.LOAD_LISTS_SUCCESS, lists});
        }).catch(error => {
            showNotification('error', error);
            dispatch({type: actionTypes.LOAD_LISTS_FAIL});
        });
    };
}