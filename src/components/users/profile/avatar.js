import React from 'react'
import { Link } from 'react-router-dom'

function Avatar(props) {
    const { user, size } = props

    return (
        <div className="avatar">
            <Link to={`/${user.login}`} title={`${user.login}`}>
                <img src={user.avatar_url} alt={user.login} width={size} height={size} />
            </Link>
        </div>
    )
}

Avatar.propTypes = {
}
Avatar.defaultProps = {
    size: 100
}

export default Avatar