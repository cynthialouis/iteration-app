import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
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
                <h3>Members</h3>

                <Table>
                    <thead>
                    <tr>
                        <th>Team</th>
                        <th>Name</th>
                        <th>Email</th>
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
