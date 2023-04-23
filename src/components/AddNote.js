

export default function AddNote() {


	return (
		<>
			<form className="flex gap-2 mt-4">
				<select className="border-gray-200 rounded-lg">
					<option>Breakfast</option>
					<option>Lunch</option>
					<option>Dinner</option>
				</select>
				<input type='date' className="border-gray-200 rounded-lg" />
				<fieldset className='inline-flex '>
					<input
						className="w-20 border-gray-200 rounded-l-lg"
						type='number'
						step='100' />
					<div className="p-2 bg-gray-200 rounded-r">kcal</div>
				</fieldset>
				<button className="p-2 ml-2 text-white rounded-lg bg-sky-600 hover:bg-sky-700">Add</button>
			</form>
		</>
	)
}