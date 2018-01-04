import {showNotification} from "./components/helperComponents/sharedFunctions";

function loggedIn() {
    return localStorage.getItem("token") !== null;
}

export const requireAuth = (nextState, replace) => {
    if (!loggedIn()) {
        replace({
            pathname: '/login'
        });
    }
};

const reAuthenticate = ()=> {
    localStorage.clear();
    showNotification('error', 'Your session has expired. Please login to continue');
    // todo: find a better way of redirecting
    setTimeout(() => {
        redirect();
    }, 1000);
};

export const reAuthenticateIfStatusCodeIs401 = (error) => {
    if(String(error).includes('401')) {
        reAuthenticate();
    }
};


export const redirect = (location = '/') => {
    window.location.href = location;
};