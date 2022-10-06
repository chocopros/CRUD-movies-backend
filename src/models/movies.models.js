// DataTypes --> type of dates (integer, varchar, char) a way to access them from javascript
const { Field } = require('pg-protocol/dist/messages')
const {DataTypes} = require ('sequelize')

const db = require('../utils/database')

const Movies = db.define('movies', {
    
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'release_date'
    }

})

module.exports = Movies

