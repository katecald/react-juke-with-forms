import React, { Component } from 'react';
import NewPlaylist from './NewPlaylist';


export default class NewPlaylistContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            validInput: false
        }
        this.setInputValue = this.setInputValue.bind(this);
        this.submitInputValue = this.submitInputValue.bind(this);
        this.validateInputValue = this.validateInputValue.bind(this);
    }

    setInputValue(e) {
        //e.preventDefault();
        this.setState({inputValue: e.target.value})
        this.validateInputValue(e);
    }

    submitInputValue(e) {
        e.preventDefault();
        console.log('submit function',this.state.inputValue);
        this.setState({inputValue: ''});
    }

    validateInputValue(e){
        if (!e.target.value || e.target.value.length > 16) {
            this.setState({validInput: false})
            console.log(this.state.inputValue);
        } else this.setState({validInput: true});
        
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