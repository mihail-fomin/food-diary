import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	notes: [
		{ id: 1, date: '23.04.2013', option: 'Breakfast', calories: 500 },
		{ id: 2, date: '23.04.2013', option: 'Lunch', calories: 1200 },
		{ id: 3, date: '23.04.2013', option: 'Dinner', calories: 850 },
	]
}

const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		addNote(state, action) {
			state.notes.push({
				id: new Date().toISOString(),
				date: action.payload.date,
				option: action.payload.option,
				calories: action.payload.calories,
			})
		},
		removeNote(state, action) {
			state.notes = state.notes.filter(note => note.id !== action.payload.id)
		},
	},
})

export const { addNote, removeNote } = noteSlice.actions
export default noteSlice.reducer