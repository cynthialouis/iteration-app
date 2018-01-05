import { Component } from 'react';

/**
 * Container component
 */
class FetchAllTeams extends Component {

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Ajax request with fetch library
         * Fetches all members from our iteration-api
         * and save them as fetchedMembers props to reuse in other components.
         */
        fetch('http://127.0.0.1:8000/api/teams')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let teams = JSON.parse(data.teams);
                this.props.fetchedTeams(teams);
            });
    }

    render() {

        // No DOM to emit.
        return null;
    }
}

export default FetchAllTeams;
