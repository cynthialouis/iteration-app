import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import '../variables';
import T from 'i18n-react';
import visibility from '../../images/visibility.svg';
import bin from '../../images/bin.svg';

/**
 * Presentational component
 */
class Members extends Component {
    render() {

        // Create new row in table for each member (from props).
        const members = this.props.allMembers.map(member =>
            <tr key={ member.id }>
                <td> </td>
                <td>{ member.name }</td>
                <td>{ member.email }</td>
                <td>
                    <Link to='/'>
                        <img src={ visibility } alt='remove' />
                    </Link>
                    <Link to='/'>
                        <img src={ bin } alt='remove' />
                    </Link>
                </td>
            </tr>
        );


        return (
            <div>
                <h3>{ T.translate('members.title') }</h3>

                <Table>
                    <thead>
                    <tr>
                        <th>{ T.translate('members.team') }</th>
                        <th>{ T.translate('members.name') }</th>
                        <th>{ T.translate('members.email') }</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                        { members }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Members;
