import fetch from 'isomorphic-fetch'
const API_URL = 'https://api.github.com'

class GitHub {

    static generateApiCredentials() {
        const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID
        const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID

        return `client_id=${clientId}&client_secret=${clientSecret}`
        
    }

    static getUser(user) {
        return fetch(`${API_URL}/users/${user}?${this.generateApiCredentials()}`)
            .then(response => response.json())
            .then(json => {
                return json
            })
            .catch(error => {
                console.log( error )
            })
    }

    static searchUsers(q) {
        return fetch(`${API_URL}/search/users?q=${q}&per_page=10&${this.generateApiCredentials()}`)
            .then(response => response.json())
            .then(json => {
                return json
            })
            .catch(error => {
                console.log( error )
            })
    }

    static getRecentActivity(user) {
        return fetch(`${API_URL}/users/${user}/events?${this.generateApiCredentials()}`)
            .then(response => response.json())
            .then(json => {
                return json
            })
            .catch(error => {
                console.log( error )
            })
    }

    static getRepos(user) {
        const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID
        const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_ID

        return fetch(`${API_URL}/users/${user}/repos?${this.generateApiCredentials()}`)
            .then(response => response.json())
            .then(json => {
                return json
            })
            .catch(error => {
                console.log( error )
            })
    }

    static getFollowers(user) {
        return fetch(`${API_URL}/users/${user}/followers?${this.generateApiCredentials()}`)
            .then(response => response.json())
            .catch(error => {
                console.log( error )
             })
    }

}

export default GitHub