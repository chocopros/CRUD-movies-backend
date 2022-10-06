// It will import all the models that we have, all the tables, it will contain the relationships of the tables

const Movies = require('./movies.models')

//function that the topic of relationships will have
const initModels = () => {
    Movies
}

module.exports = initModels