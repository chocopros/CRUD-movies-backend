//generator uuid
const uuid = require('uuid')

//imports movies models for to make requests
const Movies = require('../models/movies.models')

const getAllMovies = async () => {

  //? select * from movies
  const data = await Movies.findAll() // get all movies

  return data
}


// console.log(getAllMovies()
//   .then(res => console.log(res))
//   .catch(err => console.log(err)))
// // Test --> node ./src/movies/movies.controlles.js


// insert into movies (id,name,denre, duration, release Data) values (uuid.v4, data.name , etc)
const createMovie = async (data) => {

  const newMovie = await Movies.create({

    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate
  })
  return newMovie

}
// TEST CREATE FILM

createMovie(
  {
    name: 'Blade II',
    genre: 'Action',
    duration: 117,
    releaseDate: '2002/03/12'
  }
)
  .then(res => console.log(res))
  .catch(err => console.log(err))
