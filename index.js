const express = require('express');
const app = express();
const personRoutes = require('./routes/index.js')

//make a request
app.get('/', (req, res) => {
    return res.json({message: "Hello World!"})
})

//spin up express server
app.listen(3000, () => {
    console.log('Server is running')
})

// MVC pattern - Model, view, controller
// Model -> data storage and structure
// View -> presentation of data
// controllers -> business logic