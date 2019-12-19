import React, { Component, Fragment } from 'react'
import 'react-dom'
import { Link, withRouter } from 'react-router-dom'
import _ from 'lodash'
import { GitHub } from '../../api'
import { Autocomplete } from '.'

import { ReactComponent as GithubLogo } from '../../icons/github.svg'

class SearchInput extends Component  {

    constructor(props) {
        super(props)

        this.state = {
            defaultValue: '',
            searchSuggestions: [],
            isAutocompleteVisible: false
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectHandler = this.onSelectHandler.bind(this)
        this.onBlurHandler = this.onBlurHandler.bind(this)
    }

    

    componentDidUpdate(prevProps) {
        if (!_.isEqual(prevProps, this.props)) {
            this.setState({
                defaultValue: this.props.defaultValue
            })
        }
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
        const { error, defaultValue, title } = this.props

        return (
            <Fragment>
                <form className="search-input" method="post" onSubmit={this.onSubmitHandler}>
                    {error ? 
                        <div>
                            {error}
                        </div>
                    : ''}

                    {title ? 
                        <div className="search-input__heading">
                            <Link to="/">
                                <GithubLogo width="32" height="32" />
                            </Link>
                            <h4 className="no-bm">{title}</h4>
                        </div>
                    : ''}
                        
                    <div className="search-input__row">
                        <div className="search-input__field">
                            <label className="visibly-hidden" htmlFor="username">GitHub Username*</label>
                            <input ref="username" type="search" name="username" id="username" defaultValue={defaultValue} required placeholder="Start typing a username" onChange={this.onChangeHandler} onBlur={this.onBlurHandler} />
                            <Autocomplete isVisible={isAutocompleteVisible} items={searchSuggestions} onSelect={this.onSelectHandler} />
                        </div>

                        <div className="search-input__field search-input__field--submit">
                            <input className="button" type="submit" value="Search" />
                        </div>
                    </div>
                </form>
            </Fragment>
        )
    }

}

SearchInput.propTypes = {
}

SearchInput.defaultProps = {
    defaultValue: '',
    title: 'Find information about any GitHub user...'
}

export default withRouter(SearchInput)