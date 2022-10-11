//generator uuid
const { response } = require('express');
const { where } = require('sequelize');
const uuid = require('uuid');

//imports movies models for to make requests
const Movies = require('../models/movies.models');


/***************** GET MOVIES IN DATABASE *****************/
 //? select * from movies
const getAllMovies = async () => {

  const data = await Movies.findAll() // get all movies

  return data
};

// TEST GET ALL MOVIES
// getAllMovies()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))
// // Test --> node ./src/movies/movies.controlles.js



/***************** GET MOVIE BY ID OR OTHER *****************/
//Select * from movies where id = id;
const getMovieById = async (id) => {
  const data = await Movies.findOne({
    where: {
      id: id
    },
  });
  return data
};

// TEST getMovieById
// getMovieById('92d606a4-8380-4c1c-972a-15a42bccc')
//   .then(res => console.log(res))
//   .catch(err => console.log(err))



/***************** >>CREATE FILM IN DATABASE<< *****************/
// insert into movies (id,name,denre, duration, release Data) values (uuid.v4, data.name , etc)
const createMovie = async (data) => {

  const newMovie = await Movies.create({

    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate
  });
  return newMovie
};

//TEST CREATE FILM
// createMovie(
//   {
//     name: 'Metro 2033',
//     genre: 'apocalypsi',
//     duration: 167,
//     releaseDate: '2033/03/12'
//   }
// )
//   .then(res => console.log(res))
//   .catch(err => console.log(err))



//**************************** >>PUT FILM<< *****************************/

const editMovie =  async (id, data) => {
  const response  = await Movies.update (data, {
    where: {
      id: id
    }
  });
  return response
};

// TEST UPDATE
// editMovie('0eb434e4-ce3b-4d44-a7f1-b21a1cdd956a', {
//   name: 'Blade Runer',
//   duration: 220
// }).then(response => {
//   console.log(response)
// }).catch(err => {
//   console.log(err)
// })


//**************************** >>DELETE MOVIE<< *****************************/

const deleteMovieById = async (id) => {
  const data = await Movies.destroy({
    where: {
      id: id
    }
  });
  return data
};

/********************* EXPORTS FUNCTION *********************/
module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  editMovie,
  deleteMovieById
};