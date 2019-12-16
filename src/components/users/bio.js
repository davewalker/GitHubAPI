import React from 'react'

function Bio(props) {
    const { user } = props
    const name = user.name || user.login

    return (
        <div>
            <h1>{name}</h1>
            <img alt={user.name} src={user.avatar_url} width={200} height={200} />

            <ul>
                <li>Followers: {user.followers}</li>
                <li>Following: {user.following}</li>
            </ul>
        </div>
    )
}

export default Bio