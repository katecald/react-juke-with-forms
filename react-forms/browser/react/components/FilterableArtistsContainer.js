import React, { Component } from 'react';
import Artists from './Artists';
import FilterInput from './FilterInput';

export default class FilterableArtistsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterValue: ''
        }
        this.setFilter = this.setFilter.bind(this);
    }

    setFilter(e) {
        this.setState({filterValue: e.target.value})
    }

    render () {
        let artists = this.props.artists;
        let filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(this.state.filterValue.toLowerCase()))

        return (
        <div>
            <FilterInput setFilter={this.setFilter}/>
            <Artists artists={filteredArtists} />
        </div>
        )
    }
}