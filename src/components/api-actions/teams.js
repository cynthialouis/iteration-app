/**
 * Ajax request with fetch library
 * Fetches all teams from our iteration-api.
 * @returns {Promise<Response>}
 */
export function fetchAllTeams() {
     return fetch('http://127.0.0.1:8000/api/teams')
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.teams));
        })
         .catch(err => {
             console.log(err);
         })
}
