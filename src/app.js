//import express
const express = require('express')

//initialize express
const app = express()

//Ability JSON format for receive
app.use(express.json())

//Ability req in Home
app.get('/', (req, res) => {
  res.status(200).json({message: "Server Started now!!!"})
})


/********************** DATABASE ********************************/
//import database conections
const db = require('./utils/database')

//DB Authetication with info in ./database
db.authenticate()
  .then(() => console.log('DB Authetication Succesfull y'))
  .catch(err => console.log(err))

 
/********************** LISTEN SERVER *****************************/ 
//start listing
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server started in PORT: ${PORT}!`)
});