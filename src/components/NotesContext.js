import * as React from 'react'

export const NotesContext = React.createContext(null)
export const NotesDispatchContext = React.createContext(null)

export function NotesProvider({ children }) {
	const [notes, dispatch] = React.useReducer(
		notesReducer,
		initialNotes
	)

	return (
		<NotesContext.Provider value={notes}>
			<NotesDispatchContext.Provider value={dispatch}>
				{children}
			</NotesDispatchContext.Provider>
		</NotesContext.Provider>
	)
}

export function useNotes() {
	return React.useContext(NotesContext)
}

export function useNotesDispatchContext() {
	return React.useContext(NotesDispatchContext)
}

function notesReducer(notes, action) {
	switch (action.type) {
		case 'added': {
			console.log('notes:', notes);

			return [...notes, {
				id: action.id,
				date: action.date,
				option: action.option,
				calories: action.calories,
			}];
		}
		case 'removed': {
			return notes.filter(n => n.id !== action.id)
		}
		case 'finded': {
			return notes.filter(n => n.option
				.toLowerCase()
				.includes(action.value.toLowerCase()))
		}
		// case 'finded': {
		// 	return notes.map(note => note.option.match(new RegExp("^" + value, "i")))
		// }

		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}

const initialNotes = [
	{ id: 1, date: '23.04.2013 09:15', option: 'Breakfast', calories: 500 },
	{ id: 2, date: '23.04.2013 13:05', option: 'Lunch', calories: 1200 },
	{ id: 3, date: '23.04.2013 19:30', option: 'Dinner', calories: 850 },
]