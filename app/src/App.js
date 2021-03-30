import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Recorder from './components/recorder'
import AudioListContainer from './components/audioListContainer'
import DeletedAlert from './components/deletedAlert'

const App = () => {
	const [myAudios, setMyAudios] = useState(false)
	const [audios, setAudios] = useState()
	const [deleted, setDeleted] = useState(false)

	let fetchAudios = () => {
		setMyAudios(true)
		axios
			.get('http://localhost:5000/api/audios')
			.then((res) => setAudios(res.data))
			.catch((err) => console.log(err))
	}

	let uploadAudio = (blob, fileName) => {
		let data = new FormData()
		data.append('audio-file', blob, fileName)
		return axios
			.post('http://localhost:5000/api/audios', data, {
				headers: { 'Content-Type': 'multipart/form-data' }
			})
			.then((response) => response)
			.catch((error) => console.log(error))
	}

	let deleteAudio = (id) => {
		throwDeletedAlert()
		return axios
			.put(`http://localhost:5000/api/audios/${id}`)
			.then((res) => console.log(res))
			.then(() => fetchAudios())
			.catch((err) => console.log(err))
	}

	let throwDeletedAlert = () => {
		setDeleted(true)
		setTimeout(() => setDeleted(false), 3000)
	}

	let handleOption = () => setMyAudios(false)

	return (
		<>
			<div
				className='min-h-screen flex justify-center'
				style={{ backgroundImage: 'url(./Pattern-Randomized.svg)' }}>
				<div className='w-2/3 flex flex-col items-center space-y-6 h-full'>
					<h3 className='p-10 mt-10 text-3xl text-gray-800 font-bold w-full text-center tracking-widest'>
						AWESOME AUDIO RECORDER
					</h3>
					<div className='flex inline-flex w-full space-x-6'>
						<button
							className='py-2 px-4 rounded-lg border shadow-lg bg-indigo-600 appearance-none w-full text-white hover:bg-indigo-500 transition duration-200 transform ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
							onClick={handleOption}>
							NEW AUDIO FILE
						</button>
						<button
							className='py-2 px-4 rounded-lg border shadow-lg bg-indigo-600 appearance-none w-full text-white hover:bg-indigo-500 transition duration-200 transform ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'
							onClick={fetchAudios}>
							MY AUDIOS
						</button>
					</div>
					{myAudios && audios ? (
						<AudioListContainer audios={audios} deleteAudio={deleteAudio} />
					) : (
						<Recorder uploadAudio={uploadAudio} />
					)}
				</div>
				{deleted && <DeletedAlert />}
			</div>
		</>
	)
}

export default App
