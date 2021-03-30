import React, { useState, useEffect } from 'react'
import AudioFile from './audioFile'

const styles = {
	activeFilter:
		'text-white text-sm font-medium uppercase rounded-lg border shadow-lg bg-indigo-500 px-4 transition duration-200 transform ease-in-out hover:scale-95 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-600 cursor-not-allowed',
	regularFilter:
		'text-gray-800 text-sm font-medium uppercase rounded-lg border shadow-lg bg-gray-300 px-4 cursor-pointer hover:bg-indigo-400 hover:text-white transition duration-200 transform ease-in-out hover:scale-105 focus:outline-none',
	input:
		'inline-flex items-center mx-2 px-2 rounded-lg border-indigo-600 border shadow-lg appearance-none focus:outline-none w-full',
	comment: 'text-gray-800 text-sm font-light pt-4',
	container: 'w-full py-8',
	listContainer:
		'mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-1 lg:grid-cols-3',
	headerListContainer: 'w-full flex inline-flex justify-between',
	listTitle: 'text-gray-500 text-base font-medium uppercase mr-2',
	filterButtons: 'flex space-x-4'
}

const AudioList = ({
	sortedAudios,
	filter,
	searchInput,
	handleFilters,
	handleSearch,
	deleteAudio
}) => (
	<div className={styles.container}>
		<div className={styles.headerListContainer}>
			<h2 className={styles.listTitle}>AUDIOS</h2>
			<input
				type='text'
				value={searchInput}
				onChange={handleSearch}
				className={styles.input}
				placeholder='Search audios...'
			/>
			<div className='flex'>
				<p className={styles.listTitle}>FILTER:</p>
				<div className={styles.filterButtons}>
					{filter == 'name' ? (
						<button className={styles.activeFilter} onClick={handleFilters} disabled>
							Name
						</button>
					) : (
						<button className={styles.regularFilter} onClick={handleFilters}>
							Name
						</button>
					)}
					{filter == 'size' ? (
						<button className={styles.activeFilter} onClick={handleFilters} disabled>
							Size
						</button>
					) : (
						<button className={styles.regularFilter} onClick={handleFilters}>
							Size
						</button>
					)}
				</div>
			</div>
		</div>
		<div className={styles.comment}>
			Click on the name if you want to download the file :-D
		</div>
		<ul className={styles.listContainer}>
			{sortedAudios &&
				sortedAudios.map((audio) => {
					let fileName = audio.name.split('_').join(' ')
					return (
						<AudioFile
							id={audio._id}
							name={fileName}
							size={audio.size}
							url={audio.url}
							deleteAudio={deleteAudio}
							key={audio._id}
						/>
					)
				})}
		</ul>
	</div>
)

export default AudioList
