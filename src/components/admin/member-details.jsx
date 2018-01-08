import React, { Component } from 'react';
import '../variables';
import T from 'i18n-react';
import FetchMemberById from '../api/fetch-member-by-id';
import { updateMemberById } from '../api/members';


class MemberDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            memberId: props.match.params.memberId,
            member: {},
        };

        // To check if inputs initial values have already be set.
        this.didSwitchParentObject = true;

        // Necessary binding to make 'this' works in the callback.
        this.getFetchedMemberById = this.getFetchedMemberById.bind(this);
        this.submitUpdates = this.submitUpdates.bind(this);
    }

    /**
     * Lifecycle method : called during Updating phase.
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
     * Gets member from FetchMemberById component props
     * and save it as state to reuse it.
     * @param member
     */
    getFetchedMemberById = (member) => {
        this.setState({
            member: member
        })
    };

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
            updateMemberById(this.state.memberId, this.state.member);
        });
    };


    render() {

        return (
            <div>
                <FetchMemberById
                    memberId={ this.state.memberId }
                    fetchedMemberById={ this.getFetchedMemberById }>
                </FetchMemberById>

                <form>
                    <label>{ T.translate('members.team') }</label>
                    <input type="text" ref='teamInput' />
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
