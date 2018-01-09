import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home';
import Admin from './admin/admin';
import NewMemberForm from "./admin/members/new-member-form";
import MemberDetails from "./admin/members/member-details";
import NewProjectForm from "./admin/projects/new-project-form";
import ProjectDetails from "./admin/projects/project-details";
import SprintDetails from "./sprints/sprint/sprint-details";

/**
 * Handles all routes.
 */
const Main = () => (
    <main className='main'>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/admin' component={ Admin } />
            <Route path='/newmember' component={ NewMemberForm } />
            <Route path='/member/:memberId' component={ MemberDetails } />
            <Route path='/newproject' component={ NewProjectForm } />
            <Route path='/project/:projectId' component={ ProjectDetails } />
            <Route path='/sprint/:sprintId' component={ SprintDetails } />
        </Switch>
    </main>
);

export default Main;
