import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import '../../variables';
import T from 'i18n-react';
import visibility from '../../../images/visibility.svg';
import bin from '../../../images/bin.svg';
import { deleteProjectById } from '../../api-actions/projects';

/**
 * Presentational component of projects.
 */
class ProjectsGrid extends Component {

    /**
     * Sends DELETE request to the iteration-api.
     * @param project
     */
     deleteHandler = (project) => {
         deleteProjectById(project.id);
    };


    render() {

        // Create new row in table for each project (from props).
        const projects = this.props.allProjects.map(project =>
            <tr key={ project.id }>
                <td>{ project.business ? project.business.name : '' }</td>
                <td>{ project.name }</td>
                <td>
                    <Link to={ `/project/${ project.id }` }>
                        <img src={ visibility } alt='details' />
                    </Link>
                    <button onClick={ () => this.deleteHandler(project) } >
                        <img src={ bin } alt='remove' />
                    </button>
                </td>
            </tr>
        );


        return (
            <div>
                <h3>{ T.translate('project.title') }</h3>
                <Link to='/newproject'><span>{ T.translate('projects.add') }</span></Link>

                <Table>
                    <thead>
                    <tr>
                        <th>{ T.translate('projects.business') }</th>
                        <th>{ T.translate('projects.name') }</th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                        { projects }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProjectsGrid;
