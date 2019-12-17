import React from 'react'
import { Avatar } from '../profile'

function Autocomplete(props) {
    const { items } = props

    if (!items.length) {
        return null
    }

    return (
        <div className="autocomplete">
            <ul className="autocomplete__list">
                {items.map((item, k) => (
                    <li className="autocomplete__list-item" key={k}>
                        <Avatar user={item} size={20} />
                        {item.login}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Autocomplete.defaultProps = {
    items: []
}

export default Autocomplete