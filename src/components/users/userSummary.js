import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'

import { Bio, ActivityFeed, RepositoryList } from './'
import { PageSpinner } from '../generic'
import { GitHub } from '../../api'
import { SearchInput } from '../search'

class UserSummary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activity: [],
            isLoading: true,
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

        this.setState({
            isLoading: false
        })
    }

    render() {
        const { userObj, isLoading } = this.state

        if (userObj) {
            return (
                <Fragment>
                    <div className="panel">
                        <div className="panel__sidebar">
                            <Bio user={userObj} />
                        </div>
                        <div className="panel__col">
                            <div className="panel panel--wrapped">
                                <div className="panel__col">
                                    <RepositoryList user={userObj} />
                                </div>
                                <div className="panel__col">
                                    <ActivityFeed user={userObj} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        }

        if (isLoading) {
            return (
                <PageSpinner />
            )
        }

        return (
            <div>
                <SearchInput error={'User not found, why not try searching again?'} />
            </div>
        )
    }
}

export default withRouter(UserSummary)