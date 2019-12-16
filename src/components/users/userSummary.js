import React, { Component, Fragment } from 'react'
import { Bio } from './'

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
                </Fragment>
            )
        }

        return null
    }
}

export default UserSummary