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







//start listing
const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server started in PORT: ${PORT}!`)
});