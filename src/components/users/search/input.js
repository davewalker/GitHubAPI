import React, { Component } from 'react'
import 'react-dom'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import { GitHub } from '../../../api'
import { Autocomplete } from '.'

class SearchInput extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            searchSuggestions: []
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler = _.debounce(async (e) => {
        const q = this.refs.username.value  

        if (q.length) {
            const searchSuggestions = await GitHub.searchUsers(q)
            this.setState({ searchSuggestions: searchSuggestions.items })
        } else {
            this.setState({ searchSuggestions: [] })
        }
    }, 300)

    onSubmitHandler(e) {
        e.preventDefault()
        this.props.history.push(`${this.refs.username.value}`)
    }

    render() {
        const { searchSuggestions } = this.state
        const { error } = this.props

        return (
            <form method="post" onSubmit={this.onSubmitHandler}>
                {error ? 
                    <div>
                        {error}
                    </div>
                : ''}
                
                <div className="form-input">
                    <label htmlFor="username">GitHub Username*</label>
                    <input ref="username" type="search" name="username" id="username" defaultValue="" required placeholder="GitHub username" onChange={this.onChangeHandler} />
                    <Autocomplete items={searchSuggestions} />
                </div>

                <div className="form-input">
                    <input type="submit" value="Search" />
                </div>
            </form>
        )
    }

}

export default withRouter(SearchInput)