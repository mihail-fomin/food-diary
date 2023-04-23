

export default function AddNote() {


	return (
		<>
			<form className="flex gap-2 mt-4">
				<select>
					<option>Breakfast</option>
					<option>Lunch</option>
					<option>Dinner</option>
				</select>
				<input type='date' />
				<fieldset className='inline-flex'>
					<input
						className="rounded-l"
						type='number' />
					<div
						className="p-2 bg-gray-200 rounded-r"
					>kcal</div>
				</fieldset>
			</form>
		</>
	)
}