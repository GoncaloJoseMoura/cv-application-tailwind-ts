import Title from "../components/Title"
import { FormEmployment } from "../components/Forms"
import { type EmploymentDetails } from "../Store/employmentDetails"
import { Card } from "../components/Card"
import { Button } from "../components/Buttons"
import { useStore } from "../Store/combinedStore"
import { SkillsResume } from "./Skills"

function EmploymentProfile() {
	const employmentDetails = useStore.use.employmentDetails()
	const changeEmploymentEditStatus = useStore.use.changeEmploymentEditStatus()
	const employmentActiveForm = useStore.use.employmentActiveForm()
	const changeEmploymentActiveForm = useStore.use.changeEmploymentActiveForm()

	// const { employmentDetails, changeEmploymentEditStatus, employmentActiveForm, changeEmploymentActiveForm } = useEmploymentDetailsStore((state) => ({
	// 	employmentDetails: state.employmentDetails,
	// 	changeEmploymentEditStatus: state.changeEmploymentEditStatus,
	// 	employmentActiveForm: state.employmentActiveForm,
	// 	changeEmploymentActiveForm: state.changeEmploymentActiveForm,
	// }))

	return (
		<>
			<Title text='Employment History' />
			<div className='mb-5 flex flex-col gap-2'>
				{employmentDetails.map(
					(details: EmploymentDetails, index: number) =>
						details.edit ? (
							<FormEmployment key={index} index={index} />
						) : (
							<Card
								key={index}
								occupation={details.jobRole}
								location={details.employer}
								from={details.dateBegin}
								to={details.dateEnd}
								index={index}
								action={changeEmploymentEditStatus}
							/>
						)
				)}
				{employmentActiveForm ? (
					<FormEmployment index={undefined} />
				) : (
					<Button
						text='Add Employment'
						action={changeEmploymentActiveForm}
					/>
				)}
			</div>
		</>
	)
}

function EmploymentResume() {
	const employmentDetails = useStore.use.employmentDetails()
	// const employmentDetails = useEmploymentDetailsStore(
	// 	(state) => state.employmentDetails
	// )

	return (
		<div className="cv before:content-[' '] relative mt-[18px] before:absolute before:ml-[3.2px] before:mt-[56px] before:h-[calc(100%-45px)] before:w-[1px] before:bg-navyBlue">
			<h1 className='mb-5 border-b-[1px] border-solid border-navyBlue pb-1 text-[1.15rem] font-bold text-navyBlue'>
				Employment
			</h1>
			{employmentDetails.map((employment, index) => (
				<div
					key={index}
					className='cv-box relative pl-[15px] text-darkGray'
				>
					<div className="cv-box-header before:content-[' '] mb-2 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white">
						<h2 className='text-[0.8rem] font-bold'>
							{employment.jobRole}
						</h2>
						<p className='date-cv justify-self-end text-[0.6rem] font-bold'>
							{employment.dateBegin} - {employment.dateEnd}
						</p>
						<p className='location-cv col-start-1 col-end-3 text-[0.6rem]'>
							{employment.location}
						</p>
					</div>
					<div className='cv-box-description mb-4'>
						<p
							className='card text-justify text-[0.5rem]'
							dangerouslySetInnerHTML={{
								__html: employment.description
							}}
						>
							{/* {employment.description} */}
						</p>
					</div>
				</div>
			))}
			<SkillsResume />
		</div>
	)
}

export { EmploymentProfile, EmploymentResume }
