import React, { Component } from 'react';
import Members from './members';
import FetchAllMembers from '../members/fetch-all-members';

class Admin extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
        };

        // Necessary binding to make 'this' works in the callback.
        this.getFetchedMembers = this.getFetchedMembers.bind(this);
    }

    /**
     * Gets all members from FetchAllMembers component props
     * in order to save them as state and pass them to the Members component.
     * @param members
     */
    getFetchedMembers = (members) => {
        this.setState({
            members: members
        })
    };


    render() {

        return (
            <div className='members'>
                <FetchAllMembers fetchedMembers={ this.getFetchedMembers }/>
                <Members allMembers={ this.state.members } />
            </div>
        );
    }
}

export default Admin;
