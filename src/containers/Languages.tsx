import { FormLanguages } from "../components/Forms"
import { CardLanguages } from "../components/Card"
import Title from "../components/Title"
import { useStore } from "../Store/combinedStore"

function LanguagesProfile() {
	return (
		<div>
			<Title text='Languages' />
			<FormLanguages />
			<CardLanguages />
		</div>
	)
}

function LanguagesResume() {
	const languages = useStore.use.language()

	// const languages = useLanguageStore((state) => state.language)

	return (
		<>
			<h2 className='mb-[15px] ml-[20%] w-full border-b-[1px] border-solid border-white pb-[5px] text-[1.1rem] text-white'>
				Languages
			</h2>
			<ul className='mb-5 ml-[20%] list-none pl-0'>
				{languages.map((language) => (
					<li
						key={language}
						className='mb-[10px] text-[0.65rem] font-bold text-white'
					>
						{language}
					</li>
				))}
			</ul>
		</>
	)
}

export { LanguagesProfile, LanguagesResume }
