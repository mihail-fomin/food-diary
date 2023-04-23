import moment from 'moment'
import Note from './Note'

export default function NoteList() {


	return (
		<>

			<ul>
				{notes.map(n => (
					<li key={n.id}>
						<Note
							date={n.date}
							type={n.type}
							calories={n.calories}
						/>
					</li>
				))}
			</ul>
		</>
	)
}

const notes = [
	{ id: 1, date: '23.04.2013 09:15:00', type: 'Breakfast', calories: 500 },
	{ id: 2, date: '23.04.2013 13:05:00', type: 'Lunch', calories: 1200 },
	{ id: 3, date: '23.04.2013 19:30:00', type: 'Dinner', calories: 850 },

]