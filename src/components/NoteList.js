import { useState } from 'react'
import Note from './Note'
import { useNotes } from './NotesContext'


export default function NoteList() {
	const [value, setValue] = useState('')
	const notes = useNotes()

	return (
		<>
			<input
				className="mt-3 border-gray-200 rounded"
				type='text'
				placeholder="Search..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			>
			</input>

			<ul>
				{
					notes.filter(note => {
						if (value === '') {
							return note
						} else if (note.option.toLowerCase().includes(value.toLowerCase())) {
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
