import Resume from "./Resume"
import Profile from "./Profile"

function App() {
	return (
		<div className='relative xl:grid xl:grid-cols-2'>
			<section className='w-full px-[5vw] pb-[12vh] pt-[5vh]'>
				<Profile />
			</section>
			<section className='relative xl:fixed xl:right-0 flex h-screen xl:w-1/2 flex-col items-center justify-center bg-neutral-500 pt-9'>
				<Resume />
			</section>
		</div>
	)
}

export default App
