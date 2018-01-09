import React, { Component } from 'react';
import SprintsGrid from './sprints-grid';
import { fetchAllSprints } from '../../api-actions/sprints';

/**
 * Component to display all sprints.

 */
class AllSprints extends Component {

    constructor() {
        super();
        this.state = {
            sprints: [],
        };
    }

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Fetches all sprints from our iteration-api and save them as state
         * in order to pass them to the SprintsGrid component.
         */
        fetchAllSprints()
            .then((data) => {
                this.setState({
                    sprints: data
                })
            })
            .catch((err) => {
                console.error('err', err);
            });
    }

    render() {
        return (
            <div>
                <SprintsGrid allSprints={ this.state.sprints } > </SprintsGrid>
            </div>
        );
    }
}

export default AllSprints;
