// GET /movies, /movies/{id}
// POST /movies
// PUT /movies/{id}
// PATCH /movies/{id}
// DELETE /movies/{id}


// Import Propeps Router
const router = require('express').Router()
const { application } = require('express')
// Import services
const moviesServices = require('./movies.services')




//? This is the prefije:--> /movies

/************ GET *****************/
router.get('/', moviesServices.getAMovies) //? /movies

router.get ('/:id', moviesServices.getById) //? /movies


/************ POST *****************/
router.post('/', moviesServices.postMovie) //? /movies



/************ PUT *****************/
//router.put('/:id') //? /movies

/************ PATCH *****************/
router.patch('/:id', moviesServices.patchMovie) //? /movies

/************ DELETE *****************/
//router.delete('/:id') //? /movies

module.exports = router