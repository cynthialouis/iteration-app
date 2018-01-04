import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './admin/admin';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' />
            <Route path='/admin/' component={ Admin } />
        </Switch>
    </main>
);

export default Main;
