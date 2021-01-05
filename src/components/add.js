import React from 'react';
import axios from 'axios';
//importing sweetalert after installation 
import swal from 'sweetalert';

//importing external and bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';

export class Add extends React.Component {

    constructor() {
        super();

        // binding all events
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangename = this.onChangename.bind(this);
        this.onChangespecies = this.onChangespecies.bind(this);
        this.onChangegender = this.onChangegender.bind(this);
        this.onChangeimage = this.onChangeimage.bind(this);
        this.onChangeorigin = this.onChangeorigin.bind(this);
        this.onChangestatus = this.onChangestatus.bind(this);

        this.state = {
            name: '',
            origin: '',
            species: '',
            image: '',
            gender: '',
            status: ''
        }
    }

    onChangename(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangespecies(e){
        this.setState({
            species: e.target.value
        });
    }

    onChangegender(e){
        this.setState({
            gender: e.target.value
        });
    }

    onChangeorigin(e){
        this.setState({
            origin: e.target.value
        });
    }

    onChangestatus(e){
        this.setState({
            status: e.target.value
        });
    }

    onChangeimage(e){
        this.setState({
            image: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        swal("Character Added!", "Your character was successfully added"  , "success");
        // swal("Character Attributes: "
        // + this.state.name + ", " + this.state.species + ", " + this.state.gender + ", " + this.state.origin + ", " + this.state.status);

        const newCharacter = {
            name: this.state.name,
            species: this.state.species,
            gender: this.state.gender,
            origin: this.state.origin,
            status: this.state.status,
            image: this.state.image
        }
        axios.post('http://localhost:4000/api/characters', newCharacter)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        });
    }

    render() {

        return (
            <div >
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <h1 className="FormText">Create your Character</h1>

                        <br />

                        <label> Add Name </label>
                        <input type='text' className='form-control' value={this.state.name} onChange={this.onChangename}></input>

                        <br />

                        <label> Add Species </label>
                        <input type='text' className='form-control' value={this.state.species} onChange={this.onChangespecies}></input>

                        <br />

                        <label> Add Gender </label>
                        <input type='text' className='form-control' value={this.state.gender} onChange={this.onChangegender}></input>

                        <br />

                        <label> Add Origin </label>
                        <input type='text' className='form-control' value={this.state.origin} onChange={this.onChangeorigin}></input>

                        <br />

                        <label> Status </label>
                        <input type='text' className='form-control' value={this.state.status} onChange={this.onChangestatus}></input>

                        <br />

                        <label> Add Image </label>
                        <textarea type='text' className='form-control' value={this.state.image} onChange={this.onChangeimage}></textarea>

                        <br />

                        {/* Button */}
                        <div className="button">
                            <input type='submit' value='Add Character' className='btn btn-primary'></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}