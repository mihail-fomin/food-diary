import { useDispatch } from 'react-redux'
import { removeNote } from '@/store/notesSlice'

export default function Note({ id, date, option, calories }) {
	const dispatch = useDispatch()


	return (
		<>
			<li>
				<div className="flex w-[400px] space-between mt-3 items-center">
					<div className="w-full">
						<p className="text-gray-500" >{date}</p>
						<p>{`${option} - ${calories} kcal`}</p>
					</div>
					<button
						className="h-4 text-white bg-gray-500 hover:bg-gray-600 rounded-xl"
						onClick={() => {
							dispatch(removeNote({ id }))
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</li>
		</>
	)
}