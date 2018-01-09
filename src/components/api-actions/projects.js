/**
 * Ajax request with fetch library
 * Fetches all projects from our iteration-api
 * @returns {Promise<Response>}
 */
export function fetchAllProjects() {
    return fetch('http://127.0.0.1:8000/api/projects')
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.projects));
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * Ajax request with fetch library
 * Fetches one project by its id from our iteration-api.
 */
export function fetchProjectById(id) {
    return fetch(`http://127.0.0.1:8000/api/project/${id}`)
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.project));
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * Ajax request with fetch library
 * Updates a project properties by its id.
 * @param id
 * @param updatedProject
 * @returns {Promise<Response>}
 */
export function updateProjectById(id, updatedProject) {
    return fetch(`http://127.0.0.1:8000/api/project/${id}`, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(updatedProject),
        headers: {
            'Content-Type': 'application/json'
        }
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

/**
 * Ajax request with fetch library
 * Deletes a project by its id.
 * @param id
 * @returns {Promise<Response>}
 */
export function deleteProjectById(id) {
    return fetch(`http://127.0.0.1:8000/api/project/${id}`, {
        method: 'DELETE',
        mode: 'CORS',
        headers: {
            'Content-Type': 'application/json'
        }
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
