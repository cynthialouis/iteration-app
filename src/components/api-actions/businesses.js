/**
 * Ajax request with fetch library
 * Fetches all businesses from our iteration-api.
 * @returns {Promise<Response>}
 */
export function fetchAllBusinesses() {
     return fetch('http://127.0.0.1:8000/api/businesses')
        .then(results => {
            return results.json();
        })
        .then(data => {
            return(JSON.parse(data.businesses));
        })
         .catch(err => {
             console.log(err);
         })
}
