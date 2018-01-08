import React, { Component } from 'react';
import MembersGrid from './members-grid';
import { fetchAllMembers } from '../api-actions/members';

/**
 * Component to display all members (TODO : and all projects).
 */
class Admin extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
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
    }


    render() {

        return (
            <div>
                <MembersGrid allMembers={ this.state.members } />
            </div>
        );
    }
}

export default Admin;
