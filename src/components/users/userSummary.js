import React, { Component, Fragment } from 'react'
import { Bio, ActivityFeed, RepositoryList } from './'

class UserSummary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activity: []
        }
    }

    render() {
        const { user } = this.props

        if (user) {
            return (
                <Fragment>               
                    <Bio user={user} />
                    <RepositoryList user={user} />
                    <ActivityFeed user={user} />                    
                </Fragment>
            )
        }

        return null
    }
}

export default UserSummary