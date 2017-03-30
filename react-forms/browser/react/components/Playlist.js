import React from 'react';
import Songs from '../components/Songs'

export default class Playlist extends React.Component {
	

	componentDidMount () {
		console.log('props', this.props);
	    const selectPlaylist = this.props.selectPlaylist;
	    const playlistId = this.props.selectedPlaylist.id;

	    selectPlaylist(playlistId);
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
