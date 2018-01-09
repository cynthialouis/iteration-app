import React, { Component } from 'react';
import MembersGrid from './members/members-grid';
import ProjectsGrid from './projects/projects-grid';
import { fetchAllMembers } from '../api-actions/members';
import { fetchAllProjects } from '../api-actions/projects';

/**
 * Component to display all members and all projects.
 */
class Admin extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
            projects: [],
        };
    }

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Fetches all members from our iteration-api and save them as state
         * in order to pass them to the MembersGrid component.
         */
        fetchAllMembers()
            .then((data) => {
                this.setState({
                    members: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });

        /**
         * Fetches all projects from our iteration-api and save them as state
         * in order to pass them to the ProjectsGrid component.
         */
        fetchAllProjects()
            .then((data) => {
                this.setState({
                    projects: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    }


    render() {

        return (
            <div>
                <MembersGrid allMembers={ this.state.members } />
                <ProjectsGrid allProjects={ this.state.projects } />
            </div>
        );
    }
}

export default Admin;
