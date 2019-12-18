import React, { Fragment } from 'react'
import { Followers, Avatar } from './'

function Bio(props) {
    const { user } = props

    return (
        <div className="user-bio">
            <div className="user-bio__summary">
                <Avatar user={user} size={200} />
            
                <div className="user-bio__name">
                    <h1>{user.login}</h1>
                    {user.name ? 
                        <h2 className="no-bm">{user.name}</h2>
                    : ''}
                    <p className="no-bm">{user.location}</p>

                    <ul className="user-bio__numbers unlist">
                        <li>
                            <div className="counter">
                                <span className="counter__title">Followers</span>
                                <span className="counter__num">{user.followers}</span>
                            </div>
                        </li>
                        <li>
                            <div className="counter">
                                <span className="counter__title">Following</span>
                                <span className="counter__num">{user.following}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <hr />

            <ul className="user-bio__ctas unlist">
                {user.blog ?
                    <li className="full-width">
                        <a className="button button--secondary full-width" target="_blank" rel="noopener noreferrer" href={user.blog}>
                            {user.blog}
                        </a>
                    </li>
                : ''}
                <li className="full-width">
                    <a className="button button--secondary full-width" target="_blank" rel="noopener noreferrer" href={user.html_url}>
                        View GitHub profile
                    </a>
                </li>
            </ul>

            <hr />

            <Followers user={user.login} />
        </div>
    )
}

export default Bio