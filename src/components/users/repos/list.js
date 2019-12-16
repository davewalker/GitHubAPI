import React, { Component } from 'react'
import _ from 'lodash'
import { GitHub } from '../../../api'

class RepositoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.getList()
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps, this.props)) {
            this.getList()
        }
    }

    async getList() {
        const { user } = this.props
        const items = await GitHub.getRepos(user.login)

        this.setState({items})
    }

    render() {
        const { items } = this.state

        return (
            <div>
                <h2>Repos</h2>

                {items.map((item, k) => (
                    <div key={k}>
                        {item.name}
                    </div>
                ))}

            </div>
        )
    }
}

export default RepositoryList