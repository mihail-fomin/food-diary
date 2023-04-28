import AddNote from '@/components/AddNote';
import NoteList from '@/components/NoteList';
import SearchNote from '@/components/SearchNote';
import { store } from '../store/store'
import { Provider } from 'react-redux'

export default function Home() {
	return (
		<>
			<Provider store={store}>
				<div className="mx-auto container-sm">
					<h1 className="mt-6 text-3xl font-bold">Food Diary</h1>
					<h2 className='mt-3'>New note</h2>
					<AddNote />
					{/* <SearchNote /> */}
					<NoteList />
				</div>
			</Provider>

		</>
	)
}
