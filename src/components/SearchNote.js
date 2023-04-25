import { useState, useEffect } from "react"
import { useNotes, useNotesDispatchContext } from "./NotesContext"

export default function SearchNote() {
	const [value, setValue] = useState('')
	const dispatch = useNotesDispatchContext()
	const notes = useNotes()

	useEffect(() => {
		dispatch({
			type: 'finded',
			value: value,
		})
		console.log('notes: ', notes);
	}, [value, setValue])


	return (
		<>
			{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
			</svg> */}
			<input
				className="mt-3 border-gray-200 rounded"
				type='text'
				placeholder="Search..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			>

			</input>
		</>
	)
}