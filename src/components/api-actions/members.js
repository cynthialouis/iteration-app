/**
 * Ajax request with fetch library
 * Fetches all members from our iteration-api
 * @returns {Promise<Response>}
 */
export function fetchAllMembers() {
    return fetch('http://127.0.0.1:8000/api/members')
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.members));
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * Ajax request with fetch library
 * Fetches one member by its id from our iteration-api.
 */
export function fetchMemberById(id) {
    return fetch(`http://127.0.0.1:8000/api/member/${id}`)
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.member));
        })
        .catch(err => {
            console.log(err);
        })
}

/**
 * Ajax request with fetch library
 * Updates a member properties by its id.
 * @param id
 * @param updatedMember
 * @returns {Promise<Response>}
 */
export function updateMemberById(id, updatedMember) {
    return fetch(`http://127.0.0.1:8000/api/member/${id}`, {
        method: 'PUT',
        mode: 'CORS',
        body: JSON.stringify(updatedMember),
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
