const express = require('express')
const AudioFile = require('../models/audios')
let multer = require('multer')
let AWS = require('aws-sdk')

const router = express.Router()
let storage = multer.memoryStorage()
let upload = multer({ storage: storage })

// COLOCAR NOMBRE DEL BUCKET EN ESTA VARIABLE
let bucketName = 'NOMBRE_DEL_BUCKET'
// COLOCAR NOMBRE DEL BUCKET EN ESTA VARIABLE

let uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' })

router.post('/audios', upload.single('audio-file'), async (req, res) => {
	let file = req.file
	let splitted = file.originalname.split(' ')
	let size = splitted[splitted.length - 1]
	let fileSize = parseInt(splitted[splitted.length - 1])
	let fileName = splitted.filter((e) => e !== size).join('_')

	let objectParams = {
		Bucket: bucketName,
		Key: fileName,
		Body: file.buffer,
		ACL: 'public-read'
	}
	// Create object upload promise
	return uploadPromise.upload(objectParams, async (err, file) => {
		if (err) console.log('Error', err)
		if (file) {
			let toDb = { name: fileName, url: file.Location, size: fileSize }
			AudioFile.create(toDb, (err, doc) => {
				err ? res.status(500).send(err) : res.status(201).send(doc)
			})
		}
	})
})

router.get('/audios', (req, res) => {
	AudioFile.find({}).then((data) => res.status(200).send(data))
})

router.put('/audios/:id', (req, res) => {
	return AudioFile.findOneAndDelete(req.params.id, (err, doc) =>
		doc ? res.status(201).send(doc) : res.status(404).send(err)
	)
})

module.exports = router
