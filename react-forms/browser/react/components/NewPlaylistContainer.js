import React, { Component } from 'react';
import NewPlaylist from './NewPlaylist';
import axois from 'axios';


export default class NewPlaylistContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            validInput: true
        }
        this.setInputValue = this.setInputValue.bind(this);
        this.submitInputValue = this.submitInputValue.bind(this);
    }

    setInputValue(e) {
        this.setState({inputValue: e.target.value})
        this.setState({validInput: true})
    }

    submitInputValue(e) {
        let inputValue = this.state.inputValue
        e.preventDefault();
        
         if (inputValue && inputValue.length <= 16) {
            this.setState({validInput: true});
            this.props.postNewPlaylist(inputValue)
        } else {
            this.setState({validInput: false})    
        }
        this.setState({inputValue: ''});
    }

    render () {

        return (
        <div>
            <NewPlaylist    setInputValue={this.setInputValue} 
                            submitInputValue={this.submitInputValue}
                            inputValue={this.state.inputValue}
                            validInput={this.state.validInput}/>
        </div>
        )
    }
}