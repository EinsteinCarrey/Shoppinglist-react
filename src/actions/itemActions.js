import * as actionTypes from './actionTypes';
import {Api} from "../api";
import {initiateAjaxCall, terminateAjaxCall} from "./ajaxStatusActions";
import {showNotification} from "../components/helperComponents/sharedFunctions";

export function loadItems(list_id, item_id=null) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.listItems(list_id, item_id).then(items => {
            return {type: actionTypes.LOAD_ITEM_SUCCESS, items};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}

export function deleteItem(itemId) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.deleteItem(itemId).then(() => {
            return {type: actionTypes.DELETE_ITEM_SUCCESS, itemId};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}

export function createItem(listId, newItem) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.createItem(listId, newItem).then(() => {
            dispatch(loadItems(listId));
            return {type: actionTypes.CREATE_ITEM_SUCCESS};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}

export function initializeItemEditor(item) {
    return {type: actionTypes.INITIALIZE_ITEM_EDITOR, item};
}

export function updateItem(updatedItem) {
    return function (dispatch) {
        dispatch(initiateAjaxCall());
        return Api.updateItem(updatedItem).then(() => {
            return {type: actionTypes.UPDATE_ITEM_SUCCESS};
        }).catch(error => {
            dispatch(terminateAjaxCall());
            showNotification('error', error);
        });
    };
}