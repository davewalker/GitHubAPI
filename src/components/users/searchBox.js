import React, { Component, Fragment } from 'react'
import 'react-dom'

class SearchBox extends Component  {

    constructor(props) {
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler() {
        this.props.searchHandler(this.refs.username.value)
    }

    render() {
        const { error } = this.props

        return (
            <Fragment>
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
                    <input type="submit" value="Search" onClick={this.onClickHandler} />
                </div>
            </Fragment>
        )
    }

}

export default SearchBox