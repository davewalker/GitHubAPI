import React from 'react'
import { Functions } from '../../../api'

function ActivityItem(props) {
    const { activity } = props
    const commits = activity.payload.commits

    return (
        <div className="activity-list__item">
            {commits ?
                <h4>
                    Pushed {commits.length} commit{commits.length !== 1 ? 's' : ''}
                </h4>
            : 
                <h4>
                    !!!
                </h4>
            }


            {/* <h4>Created {commits.length ?  : '0'}</h4> */}
            <time dateTime={activity.created_at}>{Functions.formatDate(activity.created_at).fromNow()}</time>

            { commits ?
                <ul>
                    {commits.map((commit, k) => (
                        <li key={k}>
                            {commit.message}
                        </li>
                    ))}
                </ul>
            : ''}
        </div>
    )
}

export default ActivityItem