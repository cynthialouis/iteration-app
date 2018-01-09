import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import '../../variables';
import T from 'i18n-react';
import visibility from '../../../images/visibility.svg';
import bin from '../../../images/bin.svg';
import { deleteMemberById } from '../../api-actions/members';

/**
 * Presentational component of members.
 */
class MembersGrid extends Component {

    /**
     * Sends DELETE request to the iteration-api.
     * @param member
     */
     deleteHandler = (member) => {
         deleteMemberById(member.id);
    };


    render() {

        // Create new row in table for each member (from props).
        const members = this.props.allMembers.map(member =>
            <tr key={ member.id }>
                <td>{ member.team ? member.team.name : '' }</td>
                <td>{ member.name }</td>
                <td>{ member.email }</td>
                <td>
                    <Link to={ `/member/${ member.id }` }>
                        <img src={ visibility } alt='details' />
                    </Link>
                    <button onClick={ () => this.deleteHandler(member) } >
                        <img src={ bin } alt='remove' />
                    </button>
                </td>
            </tr>
        );


        return (
            <div>
                <h3>{ T.translate('members.title') }</h3>
                <Link to='/newmember'><span>{ T.translate('members.add') }</span></Link>

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

export default MembersGrid;
