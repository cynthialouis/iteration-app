import React from 'react';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' />
        </Switch>
    </main>
);

export default Main;