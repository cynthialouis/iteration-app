import React, { Component } from 'react';
import '../variables';
import T from 'i18n-react';
import FetchAllTeams from '../api/fetch-all-teams';

/**
 * Component to add a new member to API.
 */
class NewMemberForm extends Component {

    constructor() {
        super();
        this.state = {
            teams: [],
        };

        // Necessary bindings to make 'this' works in callbacks.
        this.addNewMember = this.addNewMember.bind(this);
        this.getFetchedTeams = this.getFetchedTeams.bind(this);
    }

    /**
     * Add a new member to API with form values (team, name and email) on click to button.
     * @param e
     */
    addNewMember(e) {
        // Necessary to avoid the page to refresh.
        e.preventDefault();

        /**
         * Ajax request with fetch library
         * to post one member to our iteration-api
         */
        fetch('http://localhost:8000/api/members', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                team: this.refs.team.value,
                name: this.refs.name.value,
                email: this.refs.email.value,
            })
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(JSON.parse(data));
        })
        .catch(err => {
            console.log(err);
        })
    }


    /**
     * Gets all teams from FetchAllMembers component props
     * in order to save them as props and reuse them.
     * @param teams
     */
    getFetchedTeams = (teams) => {
        this.setState({
            teams: teams
        })
    };


    render() {

        // Create a new select option for each team.
        const TeamOption = this.state.teams.map(team =>
            <option value={ team.name } key={ team.id } ref='team'>{ team.name }</option>
        );

        return (
            <div>
                {/* Just to fetch teams from api. No DOM emitted. */}
                <FetchAllTeams fetchedTeams={ this.getFetchedTeams }/>

                <form>
                    <label>{ T.translate('members.team') }</label>
                    <select>
                        <option> </option>
                        { TeamOption }
                    </select>
                    <label>{ T.translate('members.name') }</label>
                    <input type='text' ref='name' />
                    <label>{ T.translate('members.email') }</label>
                    <input type='text' ref='email' />

                    <button onClick={ this.addNewMember }>{ T.translate('add') }</button>
                </form>
            </div>
        );
    }
}

export default NewMemberForm;
