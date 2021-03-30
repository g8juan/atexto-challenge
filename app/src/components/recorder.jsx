import React, { useState } from 'react'
import { ReactMic } from 'react-mic'
import Warning from './warning'
import Success from './success'

const styles = {
	container: 'w-full flex flex-col items-center space-y-6 h-full py-8',
	fileNameContainer: 'w-full space-y-2',
	inputTitle: 'text-left w-full text-sm px-1 m-0 text-gray-800',
	inputContainer: 'flex flex-row w-full',
	input:
		'inline-flex items-center px-4 py-2 rounded-l-lg border-indigo-600 border shadow-lg appearance-none focus:outline-none w-full',
	startButton:
		'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-lg shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none',
	reactMic:
		'sound-wave w-full h-16 rounded-lg border shadow-lg focus:outline-none',
	buttonsContainer: 'flex inline-flex space-between w-full space-x-4',
	button:
		'py-2 px-4 rounded-lg border shadow-lg bg-indigo-600 appearance-none w-full text-white hover:bg-indigo-500 transition duration-200 transform ease-in-out hover:scale-105',
	audio: 'w-full focus:outline-none my-4 py-2',
	buttonDisabled:
		'py-2 px-4 rounded-lg border shadow-lg bg-gray-500 appearance-none w-full text-white cursor-not-allowed'
}

const Recorder = ({ uploadAudio }) => {
	const [recording, setRecording] = useState(false)
	const [ableToRecord, setAbleToRecord] = useState(false)
	const [blobUrl, setBlobUrl] = useState()
	const [blob, setBlob] = useState()
	const [fileName, setFileName] = useState('')
	const [step, setStep] = useState()

	let handleChange = (e) => {
		if (!e.target.value) setAbleToRecord(false)
		setFileName(e.target.value)
	}

	let openPlayer = (e) => {
		e.preventDefault()
		setStep(1)
		if (fileName) setAbleToRecord(true)
	}

	let startRecording = () => {
		setStep(2)
		setRecording(true)
	}
	let stopRecording = () => {
		setStep(3)
		setRecording(false)
	}

	let reset = () => {
		setStep(1)
		setBlob('')
		setBlobUrl('')
	}

	let onStop = (recordedBlob) => {
		setBlob(recordedBlob.blob)
		setBlobUrl(recordedBlob.blobURL)
	}

	let dispatchUpload = () => {
		console.log(blob.size)
		uploadAudio(blob, fileName + ' ' + blob.size / 1000)
		setFileName('')
		setBlobUrl('')
		setBlob('')
		setAbleToRecord(false)
		setStep(0)
	}

	return (
		<div className={styles.container}>
			<div className={styles.fileNameContainer}>
				<p className={styles.inputTitle}>Enter the name for your new audio:</p>
				<form onSubmit={openPlayer} className={styles.inputContainer}>
					<input
						type='text'
						onChange={handleChange}
						value={fileName}
						className={styles.input}
					/>
					<button type='submit' className={styles.startButton}>
						START
					</button>
				</form>
			</div>
			{ableToRecord && fileName && (
				<>
					<ReactMic
						record={recording}
						className={styles.reactMic}
						onStop={onStop}
						strokeColor='#FFFFFF'
						backgroundColor='rgba(99, 102, 241)'
						mimeType='audio/mp3'
					/>
					<div className={styles.buttonsContainer}>
						{step === 1 ? (
							<button className={styles.button} onClick={startRecording}>
								RECORD
							</button>
						) : null}
						{step == 2 ? (
							<button className={styles.button} onClick={stopRecording}>
								STOP
							</button>
						) : null}
						{step == 3 ? (
							<>
								<button className={styles.button} onClick={reset}>
									RESET
								</button>
								<button className={styles.button} onClick={dispatchUpload}>
									UPLOAD
								</button>
							</>
						) : null}
					</div>
					{blobUrl && <audio src={blobUrl} controls className={styles.audio} />}
				</>
			)}
			{step == 0 ? <Success /> : null}
			{fileName.length < 1 && step > 0 ? <Warning /> : null}
		</div>
	)
}

export default Recorder
