import React from 'react'
import { Followers, Avatar } from './'

function Bio(props) {
    const { user } = props

    return (
        <div>
            <h1>{user.login}</h1>
            {user.name ? 
                <h2>{user.name}</h2>
            : ''}

            <Avatar user={user} size={200} />

            <ul>
                <li>{user.location}</li>
                {user.blog ?
                    <li>
                        <a className="button" target="_blank" rel="noopener noreferrer" href={user.blog}>
                            {user.blog}
                        </a>
                    </li>
                : ''}
                <li>
                    <a className="button" target="_blank" rel="noopener noreferrer" href={user.html_url}>
                        View GitHub profile
                    </a>
                </li>
            </ul>

            <ul>
                <li>Followers: {user.followers}</li>
                <li>Following: {user.following}</li>
            </ul>

            <Followers user={user.login} />
        </div>
    )
}

export default Bio