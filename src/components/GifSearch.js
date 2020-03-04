
import React, { Component } from 'react'

class GifSearch extends Component {
    state = {
        query: ""
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.query)
    }

    handleChange = (e) => {
        console.log(e, 'handling change')
        this.setState({query: e.target.value})
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                           value={this.state.query}
                           onChange={e => this.handleChange(e)}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default GifSearch