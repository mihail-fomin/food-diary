import moment from 'moment'
import Note from './Note'
import { useNotes, useTasksDispatch } from './NotesContext'
export default function NoteList() {

	const notes = useNotes()
	return (
		<>
			<ul>
				{notes.map(note => (
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
