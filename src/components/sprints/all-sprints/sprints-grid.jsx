import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import '../../variables';
import T from 'i18n-react';
import visibility from '../../../images/visibility.svg';

/**
 * Presentational component of sprints.
 */
class SprintsGrid extends Component {
    render() {

        // Create new row in table for each sprint (from props).
        const sprintsRows = this.props.allSprints.map(sprint =>
            <tr key={ sprint.id }>
                <td>{ sprint.start_date }</td>
                <td>{ sprint.end_date }</td>
                <td>
                    <Link to={`/sprint/${ sprint.id }`}>
                        <img src={ visibility}  alt="view" className=""/>
                    </Link>
                </td>
            </tr>
        );

        return (
            <div>
                <h1>{ T.translate('sprints.title') }</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>{ T.translate('sprints.start') }</th>
                            <th>{ T.translate('sprints.end') }</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { sprintsRows }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default SprintsGrid;
