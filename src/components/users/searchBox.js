import React, { Component } from 'react'
import 'react-dom'
import {
    withRouter
} from 'react-router-dom'

class SearchBox extends Component  {

    constructor(props) {
        super(props)

        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onSubmitHandler(e) {
        e.preventDefault()
        this.props.history.push(`${this.refs.username.value}`)
    }

    render() {
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
                    <input ref="username" type="search" name="username" id="username" defaultValue="" required placeholder="GitHub username" />
                </div>

                <div className="form-input">
                    <input type="submit" value="Search" />
                </div>
            </form>
        )
    }

}

export default withRouter(SearchBox)