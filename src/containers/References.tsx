import Title from "../components/Title"
import { FormReferences } from "../components/Forms"
import { type ReferencesDetails } from "../Store/referencesDetails"
import { Card } from "../components/Card"
import { Button } from "../components/Buttons"

import { useStore } from "../Store/combinedStore"

function ReferencesProfile() {
    const referencesDetails = useStore.use.referencesDetails()
    const changeReferencesEditStatus = useStore.use.changeReferencesEditStatus()
    const referencesActiveForm = useStore.use.referencesActiveForm()
    const changeReferencesActiveForm = useStore.use.changeReferencesActiveForm()


    return (
        <>
            <Title text='References' />
            <div className='mb-5 flex flex-col gap-2'>
                {referencesDetails.map(
                    (details: ReferencesDetails, index: number) =>
                        details.edit ? (
                            <FormReferences key={index} index={index} />
                        ) : (
                            <Card
                                key={index}
                                occupation={details.company}
                                location={details.name}
                                from={details.email}
                                to={details.phone}
                                index={index}
                                action={changeReferencesEditStatus}
                            />
                        )
                )}
                {referencesActiveForm ? (
                    <FormReferences index={undefined} />
                ) : (
                    <Button
                        text='Add Employment'
                        action={changeReferencesActiveForm}
                    />
                )}
            </div>
        </>
    )
}

function ReferencesResume() {
    const referencesDetails = useStore.use.referencesDetails()

    if (referencesDetails.length === 0) return

    return (
        <div className="cv before:content-[' '] relative mt-[18px] before:absolute before:ml-[3.2px] before:mt-[56px] before:h-[calc(100%-45px)] before:w-[1px] before:bg-navyBlue">
            <h1 className='mb-5 border-b-[1px] border-solid border-navyBlue pb-1 text-[1.15rem] font-bold text-navyBlue'>
                References
            </h1>
            {referencesDetails.map((references) => (
                <div
                    className='cv-box relative pl-[15px] text-darkGray'
                    key={references.company}
                >
                    <div className="cv-box-header before:content-[' '] mb-2 grid grid-cols-2 items-center gap-y-1 before:absolute before:left-0 before:top-[3px] before:box-content before:h-[5px] before:w-[5px] before:rounded-full before:border-[1.5px] before:border-solid before:border-navyBlue before:bg-white">
                        <h2 className='text-[0.8rem] font-bold'>
                            {references.name}
                        </h2>
                        <p className='date-cv justify-self-end text-[0.6rem] font-bold'>
                            {references.email}
                        </p>
                        <p className='location-cv col-start-1 col-end-3 text-[0.6rem]'>
                            {references.phone}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { ReferencesProfile, ReferencesResume }
