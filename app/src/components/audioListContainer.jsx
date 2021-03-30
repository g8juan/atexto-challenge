import React, { useState, useEffect } from 'react'
import AudioList from './audioList'

let AudioListContainer = ({ audios, deleteAudio }) => {
	const [sortedAudios, setSortedAudios] = useState(audios)
	const [filter, setFilter] = useState('name')
	const [searchInput, setSearchInput] = useState('')

	let handleFilters = () => {
		if (filter == 'size') {
			setFilter('name')
			let sorted = audios.sort((a, b) => {
				if (a.name < b.name) return -1
				if (a.name > b.name) return 1
				return 0
			})
			return setSortedAudios(sorted)
		}
		if (filter == 'name') {
			setFilter('size')
			let sorted = audios.sort((a, b) => {
				if (a.size < b.size) return 1
				if (a.size > b.size) return -1
				return 0
			})
			return setSortedAudios(sorted)
		}
	}

	let handleSearch = (e) => {
		if (e.target.value == '') {
			setSortedAudios(audios)
			setSearchInput('')
		} else {
			setSearchInput(e.target.value)
			let results = sortedAudios.filter((audio) => {
				let name = audio.name.toLowerCase()
				return name.includes(e.target.value.toLowerCase())
			})
			setSortedAudios(results)
		}
	}

	return (
		<AudioList
			sortedAudios={sortedAudios}
			filter={filter}
			searchInput={searchInput}
			handleFilters={handleFilters}
			handleSearch={handleSearch}
			deleteAudio={deleteAudio}
		/>
	)
}

export default AudioListContainer
