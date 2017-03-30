import React from 'react';

const NewPlaylist = (props) => {

 

  return (
  	<div>
	    <form className="form-group" onSubmit={props.submitInputValue}style={{marginTop: '20px'}}>
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