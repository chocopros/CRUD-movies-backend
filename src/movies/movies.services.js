//import Fuctions of Controllers
const {createMovie, getAllMovies, getMovieById} = require('./movies.controlles')


//  GET ALL MOVIES 
const getAMovies = (req, res) => {
    getAllMovies()
        .then(data => {
            res.status(200).json({
                GoHome: 'http://127.0.0.1:9000/',
                result: data
            })
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
};

// GET MOVIE FOR YOUR ID
const getById = (req, res) => {

    const id = req.params.id

    getMovieById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message: err.message})
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
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({message: 'Missing Data Fail Action'})
    }
};


module.exports = {
    getAMovies,
    getById,
    postMovie
}
