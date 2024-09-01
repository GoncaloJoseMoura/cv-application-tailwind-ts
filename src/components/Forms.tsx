// import { Z } from "zod"
import { useForm, Controller, type FieldValues } from "react-hook-form"

import { ButtonCancel, ButtonDelete, ButtonSave } from "./Buttons"

import { type EmploymentDetails } from "../Store/employmentDetails"
import { type EducationDetails } from "../Store/educationDetails"
// import { type ReferenceDetails } from "../Store/referencesDetails"
import { type Skill } from "../Store/skillDetails"

import { useEffect } from "react"

import { useStore } from "../Store/combinedStore"
import ReactQuill from "react-quill"
import "../../public/styles/quill.snow.css"

import { CircleX } from 'lucide-react';
import { CornerDownLeft } from "lucide-react"

function FormPersonalDetails() {
    const personalDetails = useStore.use.personalDetails()
    const updateDetails = useStore.use.updateDetails()

    // const { personalDetails, updateDetails } = usePersonalDetailsStore(
    // 	(state) => ({
    // 		personalDetails: state.personalDetails,
    // 		updateDetails: state.updateDetails
    // 	})
    // )

    const { register, watch } = useForm({
        defaultValues: personalDetails
    })

    useEffect(() => {
        const subscription = watch((data: FieldValues) => {
            data.file =
                data.file.length === 1
                    ? URL.createObjectURL(data.file[0])
                    : data.file
            updateDetails(data)
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <form>
            <label htmlFor='firstName'>
                First name:
                <input
                    type='text'
                    id='firstName'
                    placeholder='John'
                    {...register("firstName")}
                />
            </label>
            <label htmlFor='lastName'>
                Last name:
                <input
                    type='text'
                    id='lastName'
                    placeholder='Doe'
                    {...register("lastName")}
                />
            </label>
            <label htmlFor='email'>
                Email:
                <input
                    type='email'
                    id='email'
                    placeholder='john.doe@email.com'
                    {...register("email")}
                />
            </label>
            <label htmlFor='phone'>
                Phone:
                <input
                    type='tel'
                    id='phone'
                    placeholder='(555) 555-5555'
                    {...register("phone")}
                />
            </label>
            <label htmlFor='address'>
                Address:
                <input
                    type='text'
                    id='address'
                    placeholder='Silicon Valley, California'
                    {...register("address")}
                />
            </label>
            <label htmlFor='occupation'>
                Occupation:
                <input
                    type='text'
                    id='occupation'
                    placeholder='Web Developer'
                    {...register("occupation")}
                />
            </label>
            <label htmlFor='linkedin'>
                Linkedin:
                <input
                    type='text'
                    id='linkedin'
                    placeholder='https://linkedin.com/username'
                    {...register("linkedin")}
                />
            </label>
            <label htmlFor='portfolio'>
                Portfolio:
                <input
                    type='text'
                    id='portfolio'
                    placeholder='https://github.com/username'
                    {...register("portfolio")}
                />
            </label>
            <label htmlFor='about'>
                About:
                <textarea
                    rows={4}
                    id='about'
                    placeholder='e.g Proven ability to design, develop, and implement web applications using a variety of programming languages and frameworks ...'
                    {...register("about")}
                />
            </label>
            <label htmlFor='file'>
                Profile picture:
                <input
                    type='file'
                    id='file'
                    accept='image/png, image/jpeg'
                    {...register("file")}
                />
            </label>
        </form>
    )
}

function FormEducation({ index }: { index: number | undefined }) {
    const educationDetails = useStore.use.educationDetails()
    const updateEducationDetails = useStore.use.updateEducationDetails()
    const deleteEducationDetails = useStore.use.deleteEducationDetails()
    const changeEducationEditStatus = useStore.use.changeEducationEditStatus()
    const changeEducationActiveForm = useStore.use.changeEducationActiveForm()

    // const {
    // 	educationDetails,
    // 	updateEducationDetails,
    // 	deleteEducationDetails,
    // 	changeEducationEditStatus,
    // 	changeEducationActiveForm
    // } = useEducationDetailsStore((state) => ({
    // 	educationDetails: state.educationDetails,
    // 	updateEducationDetails: state.updateEducationDetails,
    // 	deleteEducationDetails: state.deleteEducationDetails,
    // 	changeEducationEditStatus: state.changeEducationEditStatus,
    // 	changeEducationActiveForm: state.changeEducationActiveForm
    // }))

    const {
        register,
        handleSubmit,
        control,
        formState: { isSubmitting }
    } = useForm({
        defaultValues:
            index !== undefined
                ? educationDetails[index]
                : {
                    school: "",
                    degree: "",
                    dateBegin: "",
                    dateEnd: "",
                    location: "",
                    description: "",
                    edit: true
                }
    })

    const onSubmit = (data: EducationDetails) => {
        updateEducationDetails(
            data,
            index !== undefined ? index : educationDetails.length
        )
        changeEducationEditStatus(
            index !== undefined ? index : educationDetails.length,
            false
        )
        if (index === undefined) {
            changeEducationActiveForm()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='school'>
                School:
                <input
                    type='text'
                    id='school'
                    placeholder='University of Madeira'
                    {...register("school")}
                />
            </label>
            <label htmlFor='degree'>
                Degree:
                <input
                    type='text'
                    id='degree'
                    placeholder='Bsc of Mathematics'
                    {...register("degree")}
                />
            </label>
            <label htmlFor='dateBeginEducation'>
                Date:
                <input
                    placeholder='From'
                    type='text'
                    id='dateBeginEducation'
                    {...register("dateBegin")}
                />
                <input placeholder='To' type='text' {...register("dateEnd")} />
            </label>
            <label htmlFor='locationEducation'>
                City:
                <input
                    type='text'
                    id='locationEducation'
                    placeholder='Funchal, Madeira'
                    {...register("location")}
                />
            </label>
            <label htmlFor='descriptionEducation'>
                Description:
                <Controller
                    name='description'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <ReactQuill
                            theme='snow'
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='e.g Understand and apply advanced mathematical concepts...'
                            modules={{
                                toolbar: [
                                    ["bold", "italic", "underline"],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["clean"]
                                ]
                            }}
                        />
                    )}
                />
            </label>

            <div className='col-span-2 flex w-full gap-2'>
                {index !== undefined ? (
                    <>
                        <ButtonDelete
                            action={() => deleteEducationDetails(index)}
                        />
                        <ButtonCancel
                            action={() =>
                                changeEducationEditStatus(index, false)
                            }
                        />
                        <ButtonSave isSubmitting={isSubmitting} />
                    </>
                ) : (
                    <>
                        <ButtonCancel action={changeEducationActiveForm} />
                        <ButtonSave isSubmitting={isSubmitting} />
                    </>
                )}
            </div>
        </form>
    )
}

function FormEmployment({ index }: { index: number | undefined }) {
    const employmentDetails = useStore.use.employmentDetails()
    const updateEmploymentDetails = useStore.use.updateEmploymentDetails()
    const deleteEmploymentDetails = useStore.use.deleteEmploymentDetails()
    const changeEmploymentEditStatus = useStore.use.changeEmploymentEditStatus()
    const changeEmploymentActiveForm = useStore.use.changeEmploymentActiveForm()

    // const {
    // 	employmentDetails,
    // 	updateEmploymentDetails,
    // 	deleteEmploymentDetails,
    // 	changeEmploymentEditStatus,
    // 	changeEmploymentActiveForm
    // } = useEmploymentDetailsStore((state) => ({
    // 	employmentDetails: state.employmentDetails,
    // 	updateEmploymentDetails: state.updateEmploymentDetails,
    // 	deleteEmploymentDetails: state.deleteEmploymentDetails,
    // 	changeEmploymentEditStatus: state.changeEmploymentEditStatus,
    // 	changeEmploymentActiveForm: state.changeEmploymentActiveForm,
    // }))

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        control
    } = useForm({
        defaultValues:
            index !== undefined
                ? employmentDetails[index]
                : {
                    jobRole: "",
                    employer: "",
                    dateBegin: "",
                    dateEnd: "",
                    location: "",
                    description: "",
                    edit: true
                }
    })

    const onSubmit = (data: EmploymentDetails) => {
        updateEmploymentDetails(
            data,
            index !== undefined ? index : employmentDetails.length
        )
        changeEmploymentEditStatus(
            index !== undefined ? index : employmentDetails.length,
            false
        )
        if (index === undefined) {
            changeEmploymentActiveForm()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='jobRole'>
                Job role:
                <input
                    type='text'
                    id='jobRole'
                    placeholder='Web Developer'
                    {...register("jobRole")}
                />
            </label>

            <label htmlFor='employer'>
                Employer:
                <input
                    type='text'
                    id='employer'
                    placeholder='Acme Inc.'
                    {...register("employer")}
                />
            </label>

            <label htmlFor='dateBegin'>
                Date:
                <input
                    type='text'
                    id='dateBegin'
                    placeholder='From'
                    {...register("dateBegin")}
                />
                <input type='text' placeholder='To' {...register("dateEnd")} />
            </label>

            <label htmlFor='location'>
                City:
                <input
                    type='text'
                    id='location'
                    placeholder='San Diego, CA'
                    {...register("location")}
                />
            </label>

            <label htmlFor='description'>
                Description:
                {/* <textarea
					rows={4}
					id='description'
					placeholder='e.g Designed and developed responsive websites ...'
					{...register("description")}
				/> */}
                <Controller
                    name='description'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <ReactQuill
                            theme='snow'
                            value={field.value}
                            onChange={field.onChange}
                            placeholder='e.g Designed and developed responsive websites ...'
                            modules={{
                                toolbar: [
                                    ["bold", "italic", "underline"],
                                    [{ list: "ordered" }, { list: "bullet" }],
                                    ["clean"]
                                ]
                            }}
                        />
                    )}
                />
            </label>

            <div className='col-span-2 flex w-full gap-2'>
                {index !== undefined ? (
                    <>
                        <ButtonDelete
                            action={() => deleteEmploymentDetails(index)}
                        />
                        <ButtonCancel
                            action={() =>
                                changeEmploymentEditStatus(index, false)
                            }
                        />
                        <ButtonSave isSubmitting={isSubmitting} />
                    </>
                ) : (
                    <>
                        <ButtonCancel action={changeEmploymentActiveForm} />
                        <ButtonSave isSubmitting={isSubmitting} />
                    </>
                )}
            </div>
        </form>
    )
}

function FormLanguages() {
    const addLanguage = useStore.use.addLanguage()

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data: FieldValues) => {
        addLanguage(data.language)
        reset()
    }

    return (
        <form
            className='relative mb-[2vh] block w-[20ch]'
            id='languages'
            onSubmit={handleSubmit(onSubmit)}
        >
            <input
                className='w-full overflow-x-auto pr-10'
                type='text'
                id='language'
                placeholder='e.g Portuguese...'
                {...register("language")}
            />
            <button
                className='absolute right-2 top-1 cursor-pointer border-none bg-transparent text-slate-400 outline-none'
                type='submit'
                aria-label='Save'
            >
                <CornerDownLeft />
            </button>
        </form>
    )
}

function FormSkills({ skill, index }: { skill: Skill; index: number }) {
    const updateSkill = useStore.use.updateSkill()
    const deleteSkill = useStore.use.deleteSkill()

    const { register, watch } = useForm({
        defaultValues: skill
    })

    const onDelete = () => {
        deleteSkill(index)
    }

    useEffect(() => {
        const subscription = watch((data) => {
            updateSkill(data, index)
        })
        return () => subscription.unsubscribe()
    }, [watch])

    return (
        <>
            <input
                type='text'
                id='category'
                placeholder='e.g Programming Languages'
                {...register("category")}
            />
            <input
                type='text'
                id='tools'
                placeholder='e.g Python, SQL, Bash, HTML, CSS, Javascript'
                {...register("tools")}
            />
            <CircleX onClick={onDelete} className="min-w-4 text-darkGray cursor-pointer transition-transform duration-200 ease-out hover:scale-125" />
        </>
    )
}

function FormReferences({ index }: { index: number | undefined }) {
    const referencesDetails = useStore.use.referencesDetails()
    const updateReferencesDetails = useStore.use.updateReferencesDetails()
    const deleteReferencesDetails = useStore.use.deleteReferencesDetails()
    const changeReferencesEditStatus = useStore.use.changeReferencesEditStatus()
    const changeReferencesActiveForm = useStore.use.changeReferencesActiveForm()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    } = useForm({
        defaultValues:
            index !== undefined
                ? referencesDetails[index]
                : {
                    company: "",
                    name: "",
                    email: "",
                    phone: "",
                    edit: true
                }
    })

    const onSubmit = (data: ReferenceDetails) => {
        updateReferencesDetails(
            data,
            index !== undefined ? index : referencesDetails.length
        )
        changeReferencesEditStatus(
            index !== undefined ? index : referencesDetails.length,
            false
        )
        if (index === undefined) {
            changeReferencesActiveForm()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor='company'>
                Company:
                <input
                    type='text'
                    id='company'
                    placeholder='Ecmo'
                    {...register("company")}
                />
            </label>
            <label htmlFor='name'>
                Name:
                <input
                    type='text'
                    id='name'
                    placeholder='John Doe'
                    {...register("name")}
                />
            </label>
            <label htmlFor='email'>
                Email:
                <input
                    type='email'
                    id='email'
                    placeholder='john.doe@example.com'
                    {...register("email")}
                />
            </label>
            <label htmlFor='phone'>
                Phone:
                <input
                    type='text'
                    id='phone'
                    placeholder='+351 123123123'
                    {...register("phone")}
                />
            </label>

            <div className='col-span-2 flex w-full gap-2'>
                {index !== undefined ? (
                    <>
                        <ButtonDelete
                            action={() => deleteReferencesDetails(index)}
                        />
                        <ButtonCancel
                            action={() =>
                                changeReferencesEditStatus(index, false)
                            }
                        />
                        <ButtonSave isSubmitting={isSubmitting} />
                    </>
                ) : (
                    <>
                        <ButtonCancel action={changeReferencesActiveForm} />
                        <ButtonSave isSubmitting={isSubmitting} />
                    </>
                )}
            </div>
        </form>
    )
}

export {
    FormEmployment,
    FormEducation,
    FormPersonalDetails,
    FormSkills,
    FormLanguages,
    FormReferences
}
