import React, { Component } from 'react'
import _ from 'lodash'
import { GitHub } from '../../../api'
import { Avatar } from './'

class Followers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
        this.getFollowersList = this.getFollowersList.bind(this)
    }

    componentDidMount() {
        this.getFollowersList()
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps, this.props)) {
            // First clear the followers list
            this.setState({
                ...this.state,
                items: []
            })

            // then re-fetch from the API
            this.getFollowersList()
        }
    }

    async getFollowersList() {
        const { user } = this.props
        const items = await GitHub.getFollowers(user)

        this.setState({ 
            ...this.state,
            items 
        })
    }

    render() {
        const { items } = this.state

        return (
            <div className="followers">
                <h3>Followers</h3>

                {items.length > 0 ? 
                    <ul className="followers__list">
                        {items.map((item, k) => (
                            <li className="followers__list-item" key={k}>
                                <Avatar user={item} size={50} />
                            </li>
                        ))}
                    </ul>
                :
                    <p>No followers</p>
                }
                
            </div>
        )
    }
}

Followers.propTypes = {
}

export default Followers