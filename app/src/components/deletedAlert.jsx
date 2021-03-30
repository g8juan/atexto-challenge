import React from 'react'

const DeletedAlert = () => {
	return (
		<div className='fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-end'>
			<div className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'>
				<div className='p-4'>
					<div className='flex items-start'>
						<div className='flex-shrink-0'>
							<svg
								className='h-6 w-6 text-green-400'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>
						<div className='ml-3 w-0 flex-1 pt-0.5'>
							<p className='text-sm font-medium text-gray-900'>Success!</p>
							<p className='mt-1 text-sm text-gray-500'>Your file has been deleted.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DeletedAlert
