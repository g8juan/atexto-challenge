require('./config/index')
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')
const dotenv = require('dotenv')
const cors = require('cors')
var AWS = require('aws-sdk')

dotenv.config()

AWS.config.getCredentials(function (err) {
	if (err) console.log('CREDENTIALS NOT LOADED ->', err.stack)
	else {
		console.log('Access keys loaded')
	}
})

const app = express()
// MIDDLEWARES
app.use(cors())
app.use(express.static(__dirname + '/public'))
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

app.listen(5000, () => {
	console.log('Server is listening on port: 5000')
})
