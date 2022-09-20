const express = require('express')
const bodyParser = require('body-parser')
const teams = require('./routes/teams')

const app = express()
const port = 4200

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', teams)

app.listen(port, () => {
    console.log(`Server running in port ${ port }`)
})