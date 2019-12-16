import React from 'react'

function Bio(props) {
    const { user } = props
    const name = user.name || user.login

    return (
        <div>
            <h1>{user.login}</h1>
            {user.name ? 
                <h2>{user.name}</h2>
            : ''}

            <img alt={name} src={user.avatar_url} width={200} height={200} />

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
        </div>
    )
}

export default Bio