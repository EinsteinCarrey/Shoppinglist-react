import React from 'react';
import PropTypes from 'prop-types';
import {redirect} from "../../helper";

export class LogoutButton extends React.Component{

    constructor(props, context) {
        super(props, context);
    }

    logOutUser = (event) => {
        localStorage.clear();
        redirect();
    };

    render(){
        return(
            <div onClick={this.logOutUser} className="logout-link">
                <i className="fa fa-user"/> Logout
            </div>

        );
    }
}

export default LogoutButton;