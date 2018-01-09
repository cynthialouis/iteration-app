import React, { Component } from 'react';
import '../../variables';
import T from 'i18n-react';
import { fetchSprintById } from '../../api-actions/sprints';

/**
 * Component to view details of a sprint.
 */
class SprintDetails extends Component {

    constructor() {
        super();
        this.state = {
            sprint: {},
        };
    }

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Fetches one sprint by its id from our iteration-api and save it as state to reuse.
         */
        fetchSprintById(this.props.match.params.sprintId)
            .then((data) => {
                this.setState({
                    sprint: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    }


    render() {

        // Create new list item for each sprint project.
        const sprintProjects = this.state.sprint.projects
            ? this.state.sprint.projects.map(project =>
                <li key={ project.id }>{ project.name }</li> )
            : null;

        // Create new list item for each sprint member.
        const sprintMembers = this.state.sprint.members
            ? this.state.sprint.members.map(member =>
                <li key={ member.id }>{ member.name }</li> )
            : null;

        return (
            <div>
                <div>
                    <label>{ T.translate('sprints.start') }</label>
                    <span>{ this.state.sprint.start_date }</span>
                </div>
                <div>
                    <label>{ T.translate('sprints.end') }</label>
                    <span>{ this.state.sprint.end_date }</span>
                </div>
                <div>
                    <label>{ T.translate('members.title') }</label>
                    <ul>
                        { sprintMembers }
                    </ul>
                </div>
                <div>
                    <label>{ T.translate('projects.title') }</label>
                    <ul>
                        { sprintProjects }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SprintDetails;
