import React, { Component } from 'react'
import { Avatar } from '../users/profile'

class Autocomplete extends Component {

    render() {
        const { isVisible, items } = this.props

        if (!items.length) {
            return null
        }

        return (
            <div className={`autocomplete ${!isVisible ? 'visibly-hidden' : '' }`} onBlur={this.onBlurHandler}>
                <ul className="autocomplete__list">
                    {items.map((item, k) => (
                        <li className="autocomplete__list-item" key={k} onClick={this.props.onSelect.bind(this, item.login)}>
                            <Avatar user={item} size={24} />
                            {item.login}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Autocomplete.defaultProps = {
    items: []
}

export default Autocomplete