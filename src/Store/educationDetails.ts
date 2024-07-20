// import { create, State, StateCreator } from "zustand"
import { StateCreator } from "zustand"

export type EducationDetails = {
	school: string
	degree: string
	dateBegin: string
	dateEnd: string
	location: string
	description: string
	edit: boolean
}

export type EducationDetailsState = {
	educationDetails: EducationDetails[]
	educationActiveForm: boolean
	changeEducationActiveForm: () => void
	updateEducationDetails: (newDetail: EducationDetails, index: number) => void
	changeEducationEditStatus: (index: number, value: boolean) => void
	deleteEducationDetails: (index: number) => void
}

// export const useEducationDetailsStore = create<EducationDetailsState>(
// 	(set) => ({
// 		educationDetails: [
// 			{
// 				school: "University of California",
// 				degree: "Bsc. Computer Science",
// 				dateBegin: "09/2018",
// 				dateEnd: "07/2021",
// 				location: "Berkeley, California",
// 				description:
// 					"Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
// 				edit: false
// 			}
// 		],
// 		educationActiveForm: false,

// 		changeEducationActiveForm: () =>
// 			set((state) => ({
// 				educationActiveForm: !state.educationActiveForm
// 			})),

// 		updateEducationDetails: (newDetail, index) =>
// 			set((state) => ({
// 				educationDetails: [
// 					...state.educationDetails.slice(0, index),
// 					newDetail,
// 					...state.educationDetails.slice(index + 1)
// 				]
// 			})),

// 		changeEducationEditStatus: (index, value) =>
// 			set((state) => ({
// 				educationDetails: [
// 					...state.educationDetails.slice(0, index),
// 					{ ...state.educationDetails[index], edit: value },
// 					...state.educationDetails.slice(index + 1)
// 				]
// 			})),

// 		deleteEducationDetails: (index) =>
// 			set((state) => ({
// 				educationDetails: [
// 					...state.educationDetails.slice(0, index),
// 					...state.educationDetails.slice(index + 1)
// 				]
// 			}))
// 	})
// )

export const createEducationSlice: StateCreator<EducationDetailsState> = (
	set
) => ({
	educationDetails: [
		{
			school: "University of California",
			degree: "Bsc. Computer Science",
			dateBegin: "09/2018",
			dateEnd: "07/2021",
			location: "Berkeley, California",
			description:
				"Successfully completed a capstone project involving the design and development of a complex web application, demonstrating the ability to apply theoretical knowledge to real-world scenarios.",
			edit: false
		}
	],
	educationActiveForm: false,

	changeEducationActiveForm: () =>
		set((state) => ({
			educationActiveForm: !state.educationActiveForm
		})),

	updateEducationDetails: (newDetail, index) =>
		set((state) => ({
			educationDetails: [
				...state.educationDetails.slice(0, index),
				newDetail,
				...state.educationDetails.slice(index + 1)
			]
		})),

	changeEducationEditStatus: (index, value) =>
		set((state) => ({
			educationDetails: [
				...state.educationDetails.slice(0, index),
				{ ...state.educationDetails[index], edit: value },
				...state.educationDetails.slice(index + 1)
			]
		})),

	deleteEducationDetails: (index) =>
		set((state) => ({
			educationDetails: [
				...state.educationDetails.slice(0, index),
				...state.educationDetails.slice(index + 1)
			]
		}))
})
