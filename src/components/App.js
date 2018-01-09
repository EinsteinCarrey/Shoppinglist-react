import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;