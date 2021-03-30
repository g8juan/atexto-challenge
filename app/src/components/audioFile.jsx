import React from 'react'

const styles = {
	audio: 'w-full h-8 my-2 focus:outline-none',
	liContainer: 'col-span-1 flex shadow-sm rounded-md',
	liSubContainer: 'flex-1 flex border-gray-200 bg-gray-300 rounded-md',
	liHeader: 'flex flex-col w-full px-4 py-2 text-sm justify-between',
	fileName: 'text-gray-800 font-medium w-full p-2',
	size: 'text-gray-800 font-medium w-full px-2',
	deleteContainer: 'flex flex-col justify-end p-4',
	deleteButton:
		'w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
}

const AudioFile = ({ id, name, size, url, deleteAudio }) => {
	return (
		<li className={styles.liContainer}>
			<div className={styles.liSubContainer}>
				<div className={styles.liHeader}>
					<a href={url} className={styles.fileName}>
						<strong className='text-indigo-600'>File name: </strong>
						{name}
					</a>
					<p className={styles.size}>
						<strong className='text-indigo-600'>Size: </strong>
						{size} kbs
					</p>
					<audio src={url} controls className={styles.audio} />
				</div>
				<div className={styles.deleteContainer}>
					<button className={styles.deleteButton} onClick={() => deleteAudio(id)}>
						<span className='sr-only'>delete</span>
						<svg
							className='w-5 h-5'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
							/>
						</svg>
					</button>
				</div>
			</div>
		</li>
	)
}

export default AudioFile
