import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Note({ date, type, calories }) {


	return (
		<>
			<div className="flex w-[500px] space-between mt-3 items-center">
				<div className="w-full">
					<p className="text-gray-500" >{date}</p>
					<p>{`${type} - ${calories} kcal`}</p>
				</div>
				<button
					className="h-4 text-white bg-gray-500 hover:bg-gray-600 rounded-xl"

				>
					<XMarkIcon />
				</button>
			</div>


		</>
	)
}