import React, { Component } from 'react';
import '../../variables';
import T from 'i18n-react';
import { fetchMemberById, updateMemberById } from '../../api-actions/members';
import {fetchAllTeams} from "../../api-actions/teams";

/**
 * Component to edit a member.
 */
class MemberDetails extends Component {

    constructor() {
        super();
        this.state = {
            member: {},
            teams: [],
        };

        // To check if inputs initial values have already be set.
        this.didSwitchParentObject = true;

        // Necessary binding to make 'this' works in the callback.
        this.submitUpdates = this.submitUpdates.bind(this);
    }

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Fetches one member by its id from our iteration-api and save it as state to reuse.
         */
        fetchMemberById(this.props.match.params.memberId)
            .then((data) => {
                this.setState({
                    member: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });

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
     * Lifecycle method : called during Updating Phase.
     * Sets the inputs initial values.
     */
    componentDidUpdate ()
    {
        if (this.didSwitchParentObject)
        {
            this.didSwitchParentObject= false;
            this.refs.teamInput.value = this.state.member.team ? this.state.member.team.name : '';
            this.refs.nameInput.value = this.state.member.name || '';
            this.refs.emailInput.value = this.state.member.email || '';
        }
    }

    /**
     * Updates state member and send PUT request to API (updateMemberById action) with those new values.
     * @param e
     */
    submitUpdates = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            member: {
                ...prevState.member,
                team: this.refs.teamInput.value,
                name: this.refs.nameInput.value,
                email: this.refs.emailInput.value,
            }
        }), () => {
            updateMemberById(this.state.member.id, this.state.member);
        });
    };


    render() {

        // Create a new select option for each team.
        const TeamOption = this.state.teams.map(team =>
            <option value={ team.name } key={ team.id }>{ team.name }</option>
        );

        return (
            <div>
                <form>
                    <label>{ T.translate('members.team') }</label>
                    <select ref='teamInput' >
                        <option>{ this.state.member.team ? this.state.member.team.name : '' }</option>
                        { TeamOption }
                    </select>
                    <label>{ T.translate('members.name') }</label>
                    <input type="text" ref='nameInput' />
                    <label>{ T.translate('members.email') }</label>
                    <input type="text" ref='emailInput' />
                    <button onClick={ this.submitUpdates }>{ T.translate('submit') }</button>
                </form>
            </div>
        )
    }
}

export default MemberDetails;
