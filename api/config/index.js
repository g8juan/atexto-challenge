const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/atexto-challenge', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
