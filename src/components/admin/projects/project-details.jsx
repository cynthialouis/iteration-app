import React, { Component } from 'react';
import '../../variables';
import T from 'i18n-react';
import { fetchProjectById, updateProjectById } from '../../api-actions/projects';
import {fetchAllBusinesses} from "../../api-actions/businesses";

/**
 * Component to edit a project.
 */
class ProjectDetails extends Component {

    constructor() {
        super();
        this.state = {
            project: {},
            businesses: [],
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
         * Fetches one project by its id from our iteration-api and save it as state to reuse.
         */
        fetchProjectById(this.props.match.params.projectId)
            .then((data) => {
                this.setState({
                    project: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });

        /**
         * Fetches all businesses from our iteration-api and save them as state to reuse.
         */
        fetchAllBusinesses()
            .then((data) => {
                this.setState({
                    businesses: data
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
            this.refs.businessInput.value = this.state.project.business ? this.state.project.business.name : '';
            this.refs.nameInput.value = this.state.project.name || '';
        }
    }

    /**
     * Updates state project and send PUT request to API (updateProjectById action) with those new values.
     * @param e
     */
    submitUpdates = (e) => {
        e.preventDefault();

        this.setState(prevState => ({
            project: {
                ...prevState.project,
                business: this.refs.businessInput.value,
                name: this.refs.nameInput.value,
            }
        }), () => {
            updateProjectById(this.state.project.id, this.state.project);
        });
    };


    render() {

        // Create a new select option for each business.
        const BusinessOption = this.state.businesses.map(business =>
            <option value={ business.name } key={ business.id }>{ business.name }</option>
        );

        return (
            <div>
                <form>
                    <label>{ T.translate('projects.business') }</label>
                    <select ref='businessInput' >
                        <option>{ this.state.project.business ? this.state.project.business.name : '' }</option>
                        { BusinessOption }
                    </select>
                    <label>{ T.translate('projects.name') }</label>
                    <input type="text" ref='nameInput' />
                    <button onClick={ this.submitUpdates }>{ T.translate('submit') }</button>
                </form>
            </div>
        )
    }
}

export default ProjectDetails;
