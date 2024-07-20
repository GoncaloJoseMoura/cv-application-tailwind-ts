import {
	IntroResume,
	ContactsResume,
	ProfileImage
} from "./containers/PersonalDetails"
import { LanguagesResume } from "./containers/Languages"
import { EmploymentResume } from "./containers/Employment"
import { EducationResume } from "./containers/Education"

function DownloadBar() {

	const print = () => {
		window.print()
	} 

	return (
		<div className='absolute top-0 flex h-9 w-full items-center justify-center bg-zinc-700 px-5'>
			<button
				className='cursor-pointer justify-self-center border-none bg-transparent transition-transform duration-300 ease-out hover:scale-125'
				type='button'
				aria-label='Save'
				onClick={print}
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#ffffff'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='feather feather-download'
				>
					<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
					<polyline points='7 10 12 15 17 10' />
					<line x1='12' y1='15' x2='12' y2='3' />
				</svg>
			</button>
		</div>
	)
}

function Side() {
	return (
		<div className='side flex h-[842px] flex-col overflow-hidden bg-navyBlue'>
			<ProfileImage />
			<div>
				<ContactsResume />
				<LanguagesResume />
			</div>
		</div>
	)
}

function Main() {
	return (
		<div className='main h-[842px] overflow-hidden px-[25px] py-12'>
			<IntroResume />
			<EmploymentResume />
			<EducationResume />
		</div>
	)
}

function Resume() {

	return (
		<>
			<DownloadBar />
			<div
				className='grid h-[842px] w-[592px] grid-cols-[35%_65%] bg-white'
				id='download-pdf'
			>
				<Side />
				<Main />
			</div>
		</>
	)
}

export default Resume
