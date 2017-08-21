import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserList from './components/UserList/UserList';
import Login from './components/login/Login';

const Routes = () => (

    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/users" component={UserList}/>
    </Switch>

);

export default Routes;