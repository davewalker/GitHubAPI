import fetch from 'isomorphic-fetch'
const API_URL = 'https://api.github.com'

const clientId = '367b895587a435128d4c'
const clientSecret = '507741baa05cbfac185b3016102e95e15c324f0b'

class GitHub {

    static getUser(user) {
        return fetch(`${API_URL}/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`)
            .then(response => response.json())
            .then(json => {
                return json
            })
            .catch(error => {
                console.log( error )
            })
    }

    static getRecentActivity(user) {
        return fetch(`${API_URL}/users/${user}/events?client_id=${clientId}&client_secret=${clientSecret}`)
            .then(response => response.json())
            .catch(error => {
                console.log( error )
            })
    }

    static getRepos(user) {
        return fetch(`${API_URL}/users/${user}/repos?client_id=${clientId}&client_secret=${clientSecret}`)
            .then(response => response.json())
            .catch(error => {
                console.log( error )
            })
    }

}

export default GitHub