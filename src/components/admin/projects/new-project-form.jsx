import React, { Component } from 'react';
import '../../variables';
import T from 'i18n-react';
import { fetchAllBusinesses } from '../../api-actions/businesses';

/**
 * Component to add a new project to API.
 */
class NewProjectForm extends Component {

    constructor() {
        super();
        this.state = {
            businesses: [],
        };

        // Necessary bindings to make 'this' works in callbacks.
        this.addNewProject = this.addNewProject.bind(this);
    }

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
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
     * Add a new project to API with form values (business and name) on click to button.
     * @param e
     */
    addNewProject(e) {
        // Necessary to avoid the page to refresh.
        e.preventDefault();

        // Create project from inputs value.
        const newProject = {
            business: this.refs.business.value,
            name: this.refs.name.value,
        };

        /**
         * Ajax request with fetch library
         * to post one project to our iteration-api
         */
        fetch('http://localhost:8000/api/projects', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject)
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

        // Create a new select option for each business.
        const BusinessOption = this.state.businesses.map(business =>
            <option value={ business.name } key={ business.id } ref='business'>{ business.name }</option>
        );

        return (
            <div>
                <form>
                    <label>{ T.translate('projects.business') }</label>
                    <select>
                        <option> </option>
                        { BusinessOption }
                    </select>
                    <label>{ T.translate('projects.name') }</label>
                    <input type='text' ref='name' />

                    <button onClick={ this.addNewProject }>{ T.translate('add') }</button>
                </form>
            </div>
        );
    }
}

export default NewProjectForm;
