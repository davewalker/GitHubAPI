import React, { Component } from 'react'
import 'react-dom'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import { GitHub } from '../../api'
import { Autocomplete } from '.'

class SearchInput extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            searchSuggestions: [],
            isAutocompleteVisible: false
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectHandler = this.onSelectHandler.bind(this)
        this.onBlurHandler = this.onBlurHandler.bind(this)
    }

    onChangeHandler = _.debounce(async (e) => {
        const q = this.refs.username.value  

        if (q.length) {
            const searchSuggestions = await GitHub.searchUsers(q)

            if (searchSuggestions.items) {
                this.setState({ 
                    searchSuggestions: searchSuggestions.items,
                    isAutocompleteVisible: true
                })
            }
        } else {
            this.setState({ searchSuggestions: [] })
        }
    }, 300)

    onBlurHandler() {
        setTimeout(() => {
            this.setState({
                ...this.state,
                isAutocompleteVisible: false
            })
        }, 100)
    }

    onSelectHandler(username) {
        this.setState({
            ...this.state,
            searchSuggestions: []
        }, () => {
            this.onBlurHandler()
            this.props.history.push(`${username}`)
        })
    }

    onSubmitHandler(e) {
        e.preventDefault()
        this.props.history.push(`${this.refs.username.value}`)
    }

    render() {
        const { searchSuggestions, isAutocompleteVisible } = this.state
        const { error } = this.props

        return (
            <form className="search-input" method="post" onSubmit={this.onSubmitHandler}>
                {error ? 
                    <div>
                        {error}
                    </div>
                : ''}
                
                <div className="search-input__field">
                    <label className="visibly-hidden" htmlFor="username">GitHub Username*</label>
                    <input size={50} ref="username" type="search" name="username" id="username" defaultValue="" required placeholder="Start typing a username" onChange={this.onChangeHandler} onBlur={this.onBlurHandler} />
                    <Autocomplete isVisible={isAutocompleteVisible} items={searchSuggestions} onSelect={this.onSelectHandler} />
                </div>

                <div className="search-input__field">
                    <input className="button" type="submit" value="Search" />
                </div>
            </form>
        )
    }

}

export default withRouter(SearchInput)