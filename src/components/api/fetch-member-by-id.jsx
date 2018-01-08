import { Component } from 'react';

/**
 * Container component
 */
class FetchMemberById extends Component {

    /**
     * Lifecycle method : executed after the first render.
     */
    componentDidMount() {
        /**
         * Ajax request with fetch library
         * Fetches one member by id from our iteration-api
         * and save it as fetchedMember props to reuse in other components.
         */
        fetch(`http://127.0.0.1:8000/api/member/${this.props.memberId}`)
            .then(results => {
                return results.json();
            })
            .then(data => {
                let member = JSON.parse(data.member);
                this.props.fetchedMemberById(member);
            });
    }

    render() {

        // No DOM to emit.
        return null;
    }
}

export default FetchMemberById;
