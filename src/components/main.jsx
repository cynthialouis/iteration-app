import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './admin/admin';
import NewMemberForm from "./admin/new-member-form";
import MemberDetails from "./admin/member-details";

/**
 * Handles all routes.
 * @returns {*}
 * @constructor
 */
const Main = () => (
    <main className='main'>
        <Switch>
            <Route exact path='/' />
            <Route path='/admin' component={ Admin } />
            <Route path='/newmember' component={ NewMemberForm } />
            <Route path='/member/:memberId' component={ MemberDetails } />
        </Switch>
    </main>
);

export default Main;
