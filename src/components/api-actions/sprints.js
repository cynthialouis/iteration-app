/**
 * Ajax request with fetch library
 * Fetches all sprints from our iteration-api.
 * @returns {Promise<Response>}
 */
export function fetchAllSprints() {
    return fetch('http://127.0.0.1:8000/api/sprints')
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.sprints));
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * Ajax request with fetch library
 * Fetches one sprint by its id from our iteration-api.
 */
export function fetchSprintById(id) {
    return fetch(`http://127.0.0.1:8000/api/sprint/${id}`)
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.sprint));
        })
        .catch(err => {
            console.log(err);
        })
}
