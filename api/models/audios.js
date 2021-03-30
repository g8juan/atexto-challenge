const mongoose = require('mongoose')

const audiosSchema = new mongoose.Schema({
	name: {
		type: 'string',
		required: true
	},
	url: { type: 'string', required: true },
	size: {
		type: 'number',
		required: true
	}
})

const AudioFile = mongoose.model('AudioFiles', audiosSchema)

module.exports = AudioFile
