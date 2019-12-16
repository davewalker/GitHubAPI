import React, { Component, Fragment } from 'react'
import _ from 'lodash'

import { GitHub } from '../../api'
import { ActivityItem } from './'

class ActivityList extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            feed: []
        }
        this.getActivityData = this.getActivityData.bind(this)
    }

    componentDidMount() {
        this.getActivityData()
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps, this.props)) {
            this.getActivityData()
        }
    }

    async getActivityData() {
        const feed = await GitHub.getRecentActivity(this.props.user.login)
        this.setState({ feed })
    }

    render() {
        const { feed } = this.state

        if (!feed.length) {
            return null
        }

        return (
            <Fragment>
                <h2>Activity</h2>

                {feed.map((item, k) => (
                    <ActivityItem activity={item} key={k} />
                ))}                
            </Fragment>
        )
    }
}

export default ActivityList