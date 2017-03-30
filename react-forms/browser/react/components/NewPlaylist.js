import React from 'react';

const NewPlaylist = (props) => {
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
  export default NewPlaylist;