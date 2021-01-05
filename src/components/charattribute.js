import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

//importing required to change the styles using external css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import axios from 'axios';

export class CharAttribute extends React.Component {

    constructor(){
        super();

        this.DeleteCharacter = this.DeleteCharacter.bind(this);
    }

    DeleteCharacter(e){
        e.preventDefault();
        console.log("Delete: "+this.props.character._id);

        axios.delete("http://localhost:4000/api/characters/" +this.props.character._id)
        .then(
            ()=>{
            this.props.ReloadData();
        })
        .catch();
    }

    render() {
        return (
            <div class="d-flex align-items-center justify-content-center">

                <Card class="card" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={this.props.character.image}  />
                    <Card.Body>
                        <Card.Title>{this.props.character.name}</Card.Title>
                        <Card.Text>
                            <b>Species:</b> {this.props.character.species}
                            <br />
                            <b>Gender:</b> {this.props.character.gender}
                            <br />
                            <b>Location</b> {this.props.character.origin}
                            <br />
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">Status: {this.props.character.status}</Card.Footer>
                    <Link to={"/change/"+ this.props.character._id} className="btn btn-info">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteCharacter}>Delete</Button>
                </Card>
               
                <br /> <br />

            </div>
        );
    }
}