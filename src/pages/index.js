import AddNote from '@/components/AddNote';
import NoteList from '@/components/NoteList';

export default function Home() {
	return (
		<>
			<div className="container mx-auto">
				<h1 className="mt-6 text-3xl font-bold">Food Diary</h1>
				<h2 className='mt-3'>New note</h2>
				<AddNote />
				<NoteList />
			</div>
		</>
	)
}
