import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	notes: []
}

const noteSlice = createSlice({
	name: 'note',
	initialState,
	reducers: {
		addNote(state, action) {
			state.push(action.payload.text)
		},
		removeNote(state, action) {
			return state.filter((note, i) => i !== action.payload.id)
		},
	},
})

export const { addNote, removeNote } = noteSlice.actions
export default noteSlice.reducer