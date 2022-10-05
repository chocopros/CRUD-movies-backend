// GET /movies, /movies/{id}
// POST /movies
// PUT /movies/{id}
// PATCH /movies/{id}
// DELETE /movies/{id}


// Import Propeps Router
const router = require('express').Router()



//? This is the prefije:--> /movies

/************ GET *****************/
router.get('/',"") //? /movies
router.get ('//:id') //? /movies

/************ POST *****************/
router.post('/') //? /movies

/************ PUT *****************/
router.put('/:id') //? /movies

/************ PATCH *****************/
router.patch('/:id') //? /movies

/************ DELETE *****************/
router.delete('/:id') //? /movies