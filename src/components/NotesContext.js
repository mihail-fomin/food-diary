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

function notesReducer(notes, action) {
	switch (action.type) {
		case 'added': {
			return [...notes, {
				id: action.id,
				date: action.date,
				type: action.type,
				calories: action.calories,
			}];
		}
		case 'removed': {
			return notes.filter(n => n.id !== action.id)
		}
	}
}

const initialNotes = [
	{ id: 1, date: '23.04.2013 09:15:00', type: 'Breakfast', calories: 500 },
	{ id: 2, date: '23.04.2013 13:05:00', type: 'Lunch', calories: 1200 },
	{ id: 3, date: '23.04.2013 19:30:00', type: 'Dinner', calories: 850 },

]