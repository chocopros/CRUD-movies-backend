//all about the connection


const { Sequelize } = require('sequelize')

//Create a conection to database
const db = new Sequelize({
    dialect: 'postgres',
    host: '127.0.0.1',
    username: 'postgres',
    password: '1993',
    database: 'movies_crud'
});

module.exports = db