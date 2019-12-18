import React, { Component, Fragment } from 'react'
import _ from 'lodash'

import { GitHub } from '../../../api'
import { ActivityItem } from './'

class ActivityFeed extends Component {
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

        return (
            <Fragment>
                <h2>Recent Activity</h2>
                
                {feed.length ? 
                    <ul className="activity-list unlist">
                        {feed.map((item, k) => (
                            <li key={k}>
                                <ActivityItem activity={item} />
                            </li>
                        ))}
                    </ul>
                :
                    <div>
                        No recent activity
                    </div>
                }
            </Fragment>
        )
    }
}

export default ActivityFeed