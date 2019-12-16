import React, { Component, Fragment } from 'react'
import {
    withRouter
} from 'react-router-dom'
import _ from 'lodash'

import { Bio, ActivityFeed, RepositoryList } from './'
import { GitHub } from '../../api'

class UserSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: [],
            userObj: false
        }        
    }

    componentDidMount() {
        this.fetchUser(this.props.match.params.username)
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps, this.props)) {
            this.fetchUser(this.props.match.params.username)
        }
    }

    async fetchUser(username) {
        const userObj = await GitHub.getUser(username)
        if (userObj.id) {
            this.setState({
                ...this.state,
                userObj
            })
        }
    }

    render() {
        const { userObj } = this.state

        if (userObj) {
            return (
                <Fragment>               
                    <Bio user={userObj} />
                    <RepositoryList user={userObj} />
                    <ActivityFeed user={userObj} />
                </Fragment>
            )
        }

        return (
            <div>
                User not found
            </div>
        )
    }
}

export default withRouter(UserSummary)