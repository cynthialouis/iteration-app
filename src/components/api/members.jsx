/**
 * PUT request to our iteration-api to update a member properties by its id.
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
