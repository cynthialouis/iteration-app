import React, { Component } from 'react';
import '../../variables';
import T from 'i18n-react';
import { fetchAllTeams } from '../../api-actions/teams';

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
    }

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Fetches all teams from our iteration-api and save them as state to reuse.
         */
        fetchAllTeams()
            .then((data) => {
                this.setState({
                    teams: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    }

    /**
     * Add a new member to API with form values (team, name and email) on click to button.
     * @param e
     */
    addNewMember(e) {
        // Necessary to avoid the page to refresh.
        e.preventDefault();

        // Create member from inputs value.
        const newMember = {
          //  team: this.refs.team.value,
            name: this.refs.name.value,
            email: this.refs.email.value,
        };

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
            body: JSON.stringify(newMember)
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


    render() {

        // Create a new select option for each team.
        const TeamOption = this.state.teams.map(team =>
            <option value={ team.name } key={ team.id } ref='team'>{ team.name }</option>
        );

        return (
            <div>
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
