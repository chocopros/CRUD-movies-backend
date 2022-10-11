//import Fuctions of Controllers
const { response } = require('express');
const { createMovie, getAllMovies, getMovieById, editMovie } = require('./movies.controlles')


//  GET ALL MOVIES 
const getAMovies = (req, res) => {
  getAllMovies()
    .then(data => {
      if(data){
        res.status(200).json({
          GoHome: 'http://127.0.0.1:9000/',
          result: data
        })
      } else {
        res.status(400).json({ message:' Error GET all Movies' })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
};

// GET MOVIE FOR YOUR ID
const getById = (req, res) => {

  const id = req.params.id

  getMovieById(id)
    .then(data => {
      if(data){
        res.status(200).json({
          Movies: 'http://127.0.0.1:9000/movies',
          result: data
        })
      } else {
        res.status(404).json({
          pageMovies: 'http://127.0.0.1:9000/movies',
          message: 'Invalid ID'
        })
      }
    })
    .catch(err => {
      res.status(404).json({ 
      pageMovies: 'http://127.0.0.1:9000/movies',
      message: err.message
    })
    })
};


// CREATE NEW MOVIES
const postMovie = (req, res) => {

  const data = req.body;

  if (data.name && data.genre && data.duration && data.releaseDate) {
    createMovie(data)
      .then(response => {
        res.status(201).json(response)
      })
      .catch(err => {
        res.status(400).json({ message: err.message })
      })
  } else {
    res.status(400).json({ message: 'Missing Data Fail Action' })
  }
};



// PATCH MOVIES
//>>Parcial Modification
const patchMovie = (req, res) => {

  const id = req.params.id;
  const { name, genre, duration, releaseDate } = req.body;

  editMovie(id, {name, genre, duration, releaseDate })
    .then((response) => {
      if (response[0]) {
        res.status(200).json({message: `Movie with ID:${id} has modificate`})
      } else {
        res.status(400).json({message: 'Invalid ID'})
      }
  
    })
    .catch(err => {
      res.status(400).json({message: err.message})
    })
  
};

module.exports = {
  getAMovies,
  getById,
  postMovie,
  patchMovie
};