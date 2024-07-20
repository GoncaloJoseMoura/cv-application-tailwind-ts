import { FormSkills } from "../components/Forms"
import { Button } from "../components/Buttons"
import Title from "../components/Title"
import { useStore } from "../Store/combinedStore"

function SkillsProfile() {
	const skills = useStore.use.skills()
	const addSkill = useStore.use.addSkill()

	// const { skills, addSkill } = useSkillsStore((state) => ({
	// 	skills: state.skills,
	// 	addSkill: state.addSkill
	// }))

	const onclick = () => {
		addSkill({ category: "", tools: "" })
	}

	return (
		<div>
			<Title text='Skills' />
			<ul className='mb-5'>
				<li className='mb-3 grid list-none grid-cols-[35%_65%] items-center gap-[10px] font-normal text-lightViolet'>
					Categories:
					<span className='break-words font-normal'>Skills:</span>
				</li>

				{skills.map((skill, index) => (
					<li
						key={skill.id}
						className='mb-3 grid grid-cols-[35%_60%_5%] items-center gap-[10px] font-normal'
					>
						<FormSkills skill={skill} index={index} />
					</li>
				))}
			</ul>
			<Button action={onclick} text='Add Skill' />
		</div>
	)
}

function SkillsResume() {
	const skills = useStore.use.skills()
	// const skills = useSkillsStore((state) => state.skills)

	return (
		<>
			<div className='cv-box relative pl-[15px] text-darkGray'>
				<div className="cv-box-header before:content-[' '] mb-3 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white">
					<h2 className='col-span-1 row-span-1 text-[0.8rem] font-bold'>
						Skills
					</h2>
				</div>
				<div className='cv-box-skills'>
					<ul className='mt-[-0.5rem]'>
						{skills.map((skill) => (
							<li
								key={skill.id}
								className='mb-[2px] grid list-none grid-cols-[40%_60%] border-b-[0.5px] border-solid border-lightGray pb-[2px] text-[0.5rem] font-bold'
							>
								{skill.category}
								<span className='text-[0.5rem] font-light'>
									{skill.tools}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}

export { SkillsProfile, SkillsResume }
