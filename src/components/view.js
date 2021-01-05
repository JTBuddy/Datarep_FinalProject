import React from 'react';
import { Characters } from './characters';
//using axios to retrieve info from a resource
import axios from 'axios';

export class View extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        //creating an object
        characters: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/characters')
            .then(
                (response) => {
                    this.setState({ characters: response.data })
                })
            .catch((error) => {
                console.log(error);
            });
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/characters')
        .then(
            (response) => {
                this.setState({ characters: response.data })
            })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="view">
                <br />
                <h1>Rick and Morty Characters</h1>
                {/* referencing the characters component */}
                <Characters characters={this.state.characters} ReloadData={this.ReloadData}></Characters>
            </div>
        );
    }
}