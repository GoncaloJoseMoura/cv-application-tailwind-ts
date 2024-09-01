import Title from "../components/Title"
import { FormEducation } from "../components/Forms"
import { type EducationDetails } from "../Store/educationDetails"
import { Card } from "../components/Card"
import { Button } from "../components/Buttons"

import { useStore } from "../Store/combinedStore"

function EducationProfile() {
    const educationDetails = useStore.use.educationDetails()
    const changeEducationEditStatus = useStore.use.changeEducationEditStatus()
    const educationActiveForm = useStore.use.educationActiveForm()
    const changeEducationActiveForm = useStore.use.changeEducationActiveForm()

    // const { educationDetails, changeEducationEditStatus, educationActiveForm, changeEducationActiveForm } = useEducationDetailsStore((state) => ({
    // 	educationDetails: state.educationDetails,
    // 	changeEducationEditStatus: state.changeEducationEditStatus,
    // 	educationActiveForm: state.educationActiveForm,
    // 	changeEducationActiveForm: state.changeEducationActiveForm
    // }))

    return (
        <>
            <Title text='Education' />
            <div className='mb-5 flex flex-col gap-2'>
                {educationDetails.map(
                    (details: EducationDetails, index: number) =>
                        details.edit ? (
                            <FormEducation key={index} index={index} />
                        ) : (
                            <Card
                                key={index}
                                occupation={details.degree}
                                location={details.school}
                                from={details.dateBegin}
                                to={details.dateEnd}
                                index={index}
                                action={changeEducationEditStatus}
                            />
                        )
                )}
                {educationActiveForm ? (
                    <FormEducation index={undefined} />
                ) : (
                    <Button
                        text='Add Employment'
                        action={changeEducationActiveForm}
                    />
                )}
            </div>
        </>
    )
}

function EducationResume() {
    const educationDetails = useStore.use.educationDetails()

    // const educationDetails = useEducationDetailsStore(
    // 	(state) => state.educationDetails
    // )

    if (educationDetails.length === 0) return

    return (
        <div className="cv before:content-[' '] relative mt-[18px] before:absolute before:ml-[3.2px] before:mt-[56px] before:h-[calc(100%-45px)] before:w-[1px] before:bg-navyBlue">
            <h1 className='mb-5 border-b-[1px] border-solid border-navyBlue pb-1 text-[1.15rem] font-bold text-navyBlue'>
                Education
            </h1>
            {educationDetails.map((education) => (
                <div
                    className='cv-box relative pl-[15px] text-darkGray'
                    key={education.degree}
                >
                    <div className="cv-box-header before:content-[' '] mb-2 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white">
                        <h2 className='text-[0.8rem] font-bold'>
                            {education.degree}
                        </h2>
                        <p className='date-cv justify-self-end text-[0.6rem] font-bold'>
                            {education.dateBegin} - {education.dateEnd}
                        </p>
                        <p className='location-cv col-start-1 col-end-3 text-[0.6rem]'>
                            {education.location} - {education.school}
                        </p>
                    </div>
                    <div className='cv-box-description mb-4'>
                        <p
                            className='card text-justify text-[0.5rem]'
                            dangerouslySetInnerHTML={{
                                __html: education.description
                            }}
                        >
                            {/* {education.description} */}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { EducationProfile, EducationResume }
