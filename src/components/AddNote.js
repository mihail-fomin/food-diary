import { useState } from "react"
import { useNotesDispatchContext } from "./NotesContext"


export default function AddNote() {
	const [option, setOption] = useState('Breakfast')
	const [date, setDate] = useState('')
	const [calories, setCalories] = useState(500)
	const dispatch = useNotesDispatchContext()

	const handleChangeOption = (e) => {
		setOption(e.target.value);
	};

	return (
		<>
			<form className="flex flex-wrap gap-2 mt-3">
				<select
					className="border-gray-200 rounded-lg"
					value={option}
					onChange={handleChangeOption}
				>
					<option value='Breakfast'>Breakfast</option>
					<option value='Lunch'>Lunch</option>
					<option value='Dinner'>Dinner</option>
				</select>
				<input
					className="border-gray-200 rounded-lg"
					type='date'
					value={date}
					onChange={e => setDate(e.target.value)}
				/>
				<fieldset className='inline-flex '>
					<input
						className="w-20 border-gray-200 rounded-l-lg"
						type='number'
						step='100'
						value={calories}
						onChange={e => setCalories(e.target.value)}
					/>
					<div className="p-2 bg-gray-200 rounded-r">kcal</div>
				</fieldset>
				<button
					className="p-2 ml-2 text-white rounded-lg bg-sky-600 hover:bg-sky-700"
					onClick={(e) => {
						e.preventDefault()
						dispatch({
							type: 'added',
							id: nextId++,
							option: option,
							date: date,
							calories: calories,
						})
					}}
				>
					Add
				</button>
			</form>
		</>
	)
}

let nextId = 4