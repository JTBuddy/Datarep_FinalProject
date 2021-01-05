const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const myConnectionString = 'mongodb+srv://admin:1234@cluster0.rtlyv.mongodb.net/characters?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

//defining schema
var characterSchema = new Schema({
  name: String,
  species: String,
  gender: String,
  origin: String,
  status: String,
  image: String
});

var CharacterModel = mongoose.model("character", characterSchema);

app.get('/api/characters', (req, res) => {

  // const mycharacters = [
  //     {
  //         "id": 1,
  //         "name": "Rick Sanchez",
  //         "status": "Alive",
  //         "species": "Human",
  //         "type": "",
  //         "gender": "Male",
  //         "origin": {
  //           "name": "Earth",
  //           "url": "https://rickandmortyapi.com/api/location/1"
  //         },
  //         "location": {
  //           "name": "Earth",
  //           "url": "https://rickandmortyapi.com/api/location/20"
  //         },
  //         "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //         "episode": [
  //           "https://rickandmortyapi.com/api/episode/1",
  //           "https://rickandmortyapi.com/api/episode/2",
  //           // ...
  //         ],
  //         "url": "https://rickandmortyapi.com/api/character/1",
  //         "created": "2017-11-04T18:48:46.250Z"
  //       }
  // ]

  CharacterModel.find((err, data) => {
    res.json(data);
  })
})

app.get('/api/characters/:id', (req, res) =>{
    console.log(req.params.id);

    CharacterModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

app.put('/api/characters/:id', (req, res) =>{
    console.log("Update character: " +req.params.id);
    console.log(req.body);

    CharacterModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
      (err, data)=>{
          res.send(data);
      })

})

app.post('/api/characters', (req, res) => {
  console.log('characters recieved!');
  console.log(req.body.name);
  console.log(req.body.species);
  console.log(req.body.gender);
  console.log(req.body.origin);
  console.log(req.body.image);
  console.log(req.body.status);

  CharacterModel.create({
    name: req.body.name,
    species: req.body.species,
    gender: req.body.gender,
    origin: req.body.origin,
    image: req.body.image,
    status: req.body.status
  })

app.delete('/api/characters/:id', (req, res)=>{
    console.log("Delete Character: " +req.params.id);

    CharacterModel.findByIdAndDelete(req.params.id, (err, data) =>{
      res.send(data);
    })
})

res.send('Character Created');
})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})