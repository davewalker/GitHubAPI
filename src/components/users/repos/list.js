import React, { Component } from 'react'
import _ from 'lodash'
import { GitHub } from '../../../api'

import { ReactComponent as FolderIcon } from '../../../icons/folder.svg'

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

                {items.length ?
                    <ul className="unlist icon-list">
                        {items.map((item, k) => (
                            <li key={k}>
                                <FolderIcon width={16} height={16} color={'#484848'} />
                                <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                                    {item.full_name}
                                </a>
                            </li>
                        ))}
                    </ul>
                :
                    <div>
                        No repos
                    </div>
                }

            </div>
        )
    }
}

export default RepositoryList