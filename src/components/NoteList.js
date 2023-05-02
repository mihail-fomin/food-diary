import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Note from './Note'


export default function NoteList() {
	const [text, setText] = useState('')
	const notes = useSelector(state => state.notes.notes)

	return (
		<>
			<input
				className="mt-3 border-gray-200 rounded"
				type='text'
				placeholder="Search..."
				value={text}
				onChange={(e) => setText(e.target.value)}
			>
			</input>

			<ul>
				{
					notes.filter(note => {
						if (text === '') {
							return note
						} else if (note.option.toLowerCase().includes(text.toLowerCase())) {
							return note
						}
					}).map(note => (
						<li key={note.id}>
							<Note
								note={note}
							/>
						</li>
					))}
			</ul>
		</>
	)
}
