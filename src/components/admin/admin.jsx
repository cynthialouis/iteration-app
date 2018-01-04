import React, { Component } from 'react';
import Members from './members';

class Admin extends Component {

    constructor() {
        super();
        this.state = {
            members: [],
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/members')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let members = JSON.parse(data.members);
                this.setState({
                    members: members
            });
        });
    }

    render() {

        return (
            <div className='members'>
                <Members allMembers={ this.state.members }> </Members>
            </div>
        );
    }
}

export default Admin;
