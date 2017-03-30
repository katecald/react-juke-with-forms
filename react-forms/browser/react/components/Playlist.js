import React from 'react';
import Songs from '../components/Songs'

export default class Playlist extends React.Component {
	constructor(props) {
		super(props)
	}	

	componentDidMount () {
	    let selectPlaylist = this.props.selectPlaylist;
	    let playlistId = this.props.routeParams.playlistId;
	    selectPlaylist(playlistId);
  }

	componentWillReceiveProps (newProps) {
		let selectPlaylist = this.props.selectPlaylist;
	  let playlistId = this.props.routeParams.playlistId;
		let newPlaylistId = newProps.routeParams.playlistId;
		if (newPlaylistId !== playlistId) {
			selectPlaylist(newPlaylistId)
		} 
	}

  render () {
  	const playlist = this.props.selectedPlaylist
  	return (
	<div>
	  <h3>{ playlist.name }</h3>
	  <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
	  { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
	  <hr />
	</div>
	)
  }

}
