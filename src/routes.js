import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {requireAuth} from './helper';
import App from './components/App';
import ListsPage from './components/lists/Lists';
import ItemsPage from './components/items/Items';
import AuthenticationPage from './components/authentication/AuthenticationPage';

export default (
    <Route path="/" component={App}>
            <IndexRoute component={ListsPage}  onEnter={requireAuth} />
            <Route path="signup" component={AuthenticationPage} module="signup" />
            <Route path="login" component={AuthenticationPage} module="login" />
            <Route path="items" component={ItemsPage} onEnter={requireAuth} />
            <Route path="lists/:id" component={ItemsPage} onEnter={requireAuth} />
            <Route path="lists" component={ListsPage} onEnter={requireAuth} />
    </Route>
);