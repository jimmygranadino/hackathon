require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const quotes = require('./backend/routes/quotes')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use('/backend/quotes', quotes)

app.listen(process.env.PORT || 3001, () => console.log(`Server is running on ${process.env.PORT} or 3001`));