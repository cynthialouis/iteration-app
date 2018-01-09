import React, { Component } from 'react';
import AllSprints from '../sprints/all-sprints/all-sprints';

/**
 * Presentational Component : Home Page.
 */
class Home extends Component {
    render() {

        return (
            <div>
                <AllSprints> </AllSprints>
            </div>
        );
    }
}

export default Home;
