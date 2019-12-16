import React from 'react'

function ActivityItem(props) {
    const { activity } = props
    // console.log( props ) 

    const commits = activity.payload.commits

    return (
        <div className="activity">
            <h4>{activity.type} at {activity.created_at}</h4>

            { commits ?
                commits.map((commit, k) => (
                    <div key={k}>
                        {commit.message}
                    </div>
                ))
            : ''}

            {/* {.map((commit, k) => (
                <div key={k}>
                    {commit.message}
                </div>
            ))} */}
        </div>
    )
}

export default ActivityItem