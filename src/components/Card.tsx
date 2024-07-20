import { useStore } from "../Store/combinedStore"

type CardProps = {
	occupation: string
	location: string
	from: string
	to: string
	index: number
	action: (index: number, value: boolean) => void
}

function Card({ occupation, location, from, to, index, action }: CardProps) {
	return (
		<div className='flex items-center justify-between break-words rounded-lg border-2 border-solid border-lightGrayNo p-4 pr-6 text-xs'>
			<h3 className='text-base font-bold'>
				{occupation} at {location}
				<br />{" "}
				<span className='break-words font-extralight'>
					{from} - {to}
				</span>
			</h3>
			<svg
				onClick={() => action(index, true)}
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='min-w-5 cursor-pointer transition-transform duration-200 ease-out hover:scale-110'
			>
				<path d='M12 20h9' />
				<path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' />
			</svg>
		</div>
	)
}

function CardLanguages() {
	const language = useStore.use.language()
	const deleteLanguage = useStore.use.deleteLanguage()
	// const { language, deleteLanguage } = useBoundStore((state) => ({
	// 	language: state.language,
	// 	deleteLanguage: state.deleteLanguage
	// }))

	const onclick = (index: number) => {
		deleteLanguage(index)
	}

	return (
		<div className="flex flex-wrap">
			{language.map((idiom: string, index: number) => (
				<button
					className='mb-2 mr-2 cursor-pointer rounded-lg border-none bg-lightViolet px-5 py-1 text-center text-sm text-white hover:line-through'
					key={idiom}
					onClick={() => onclick(index)}
					type='button'
				>
					{idiom}
				</button>
			))}
		</div>
	)
}

export { Card, CardLanguages }
