import React from 'react'
import { Functions } from '../../../api'
import { ReactComponent as ActivityIcon } from '../../../icons/activity.svg'

function ActivityItem(props) {
    const { activity } = props
    const { type, repo } = activity
    const { action, commits, description } = activity.payload

    /**
     * This is what we would normally do. However, I've just checked the list of event types from the API docs(!see 49 event types!)
     * https://developer.github.com/v3/activity/events/types/
     * For the purposes of the demo, we'll just list out some raw data
     */
    // const { type } = activity

    // switch (type) {
    //     case 'ForkEvent':
    //         item = <Fork activity={activity} />
    //         break;
    //     case ''
    // }
    // ...
    // ...

    return (
        <div className="activity-list__item">

            <div className="activity-list__item-header">
                <ActivityIcon width="32" height="32" />

                {commits ?
                    <h4>
                        Pushed {commits.length} commit{commits.length !== 1 ? 's' : ''} to {repo.name}
                    </h4>
                : 
                    <h4>{type} {action} in {repo.name}</h4>
                }
            </div>

            <time dateTime={activity.created_at}><small>{Functions.formatDate(activity.created_at).fromNow()}</small></time>

            { commits ?
                <ul className="unlist">
                    {commits.map((commit, k) => (
                        <li key={k}>
                            - {commit.message}
                        </li>
                    ))}
                </ul>
            : ''}
        </div>
    )
}

export default ActivityItem