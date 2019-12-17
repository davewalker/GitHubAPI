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
                Followers

                {items.length > 0 ? 
                    <ul className="followers__list">
                        {items.map((item, k) => (
                            <li key={k}>
                                <Avatar user={item} />
                            </li>
                        ))}
                    </ul>
                :
                    <div>
                        No followers
                    </div>
                }
                
            </div>
        )
    }
}

Followers.propTypes = {
}

export default Followers