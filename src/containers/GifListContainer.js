
import React from 'react'
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }
    componentDidMount() {
        this.fetchGIFs()
    }

    fetchGIFs = (query = "LMAO") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
            })
    }
    render() {

        return (
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs}/>
                <GifList gifs={this.state.gifs}/>
             </div>
        )
    }

}

export default GifListContainer
