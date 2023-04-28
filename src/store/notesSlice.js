import { createReducer } from '@reduxjs/toolkit'

const initialState = {
	initialNotes: [
		{ id: 1, date: '23.04.2013', option: 'Breakfast', calories: 500 },
		{ id: 2, date: '23.04.2013', option: 'Lunch', calories: 1200 },
		{ id: 3, date: '23.04.2013', option: 'Dinner', calories: 850 },
	]
}

const notesReducer = createReducer(initialState.initialNotes, (builder) => {
	builder
		.addCase('ADD_NOTE', (state, action) => {
			// "mutate" the array by calling push()
			state.push(action.payload)
		})
		.addCase('REMOVE_NOTE', (state, action) => {
			// Can still return an immutably-updated value if we want to
			return state.filter((note, i) => i !== action.payload.id)
		})
})

