import React from 'react';
import Songs from '../components/Songs';

export default class NewPlaylist extends React.Component {


	componentDidMount () {
	    const selectPlaylist = this.props.selectPlaylist;
	    const playlistId = this.props.selectedPlaylist.id;

	    selectPlaylist(playlistId);
  }


  render () {

  	const props = this.props;

  	let warningClassName = props.validInput ? 'hidden' : ''
  	return (
  	<div>
			<div className={`alert alert-warning ${warningClassName}`}>Names must be between 1 and 16 characters</div>
	    <form className="form-group" onSubmit={props.submitInputValue} style={{marginTop: '20px'}}>
	      <input
	        className="form-control"
	        placeholder="Enter playlist name"  
	        onChange={props.setInputValue} 
	        value={props.inputValue}
	      />
	      <button className="btn btn-default" disabled={!props.validInput} >Add Playlist</button>
	    </form>
  	</div>)
  }

}
