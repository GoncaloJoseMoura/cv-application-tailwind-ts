// import { create, State, StateCreator } from "zustand"
import { StateCreator } from "zustand"

export type EmploymentDetails = {
	jobRole: string
	employer: string
	dateBegin: string
	dateEnd: string
	location: string
	description: string
	edit: boolean
}

export type EmploymentDetailsState = {
	employmentDetails: EmploymentDetails[]
	employmentActiveForm: boolean
	changeEmploymentActiveForm: () => void
	updateEmploymentDetails: (
		newDetail: EmploymentDetails,
		index: number
	) => void
	changeEmploymentEditStatus: (index: number, value: boolean) => void
	deleteEmploymentDetails: (index: number) => void
}

// export const useEmploymentDetailsStore = create<EmploymentDetailsState>(
// 	(set) => ({
// 		employmentDetails: [
// 			{
// 				jobRole: "Web Developer",
// 				employer: "Acme Inc.",
// 				dateBegin: "10/2021",
// 				dateEnd: "Present",
// 				location: "San Diego, CA",
// 				description:
// 					"Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.",
// 				edit: false
// 			},
// 			{
// 				jobRole: "Junior Web Developer",
// 				employer: "Startup Inc.",
// 				dateBegin: "10/2020",
// 				dateEnd: "10/2021",
// 				location: "San Francisco, CA",
// 				description:
// 					"Developed and maintained web applications using HTML, CSS, and JavaScript. Troubleshooted and resolved bugs to ensure smooth website operation.",
// 				edit: false
// 			}
// 		],
// 		employmentActiveForm: false,

// 		changeEmploymentActiveForm: () =>
// 			set((state) => ({
// 				employmentActiveForm: !state.employmentActiveForm
// 			})),

// 		updateEmploymentDetails: (newDetails, index) =>
// 			set((state) => ({
// 				employmentDetails: [
// 					...state.employmentDetails.slice(0, index),
// 					newDetails,
// 					...state.employmentDetails.slice(index + 1)
// 				]
// 			})),

// 		changeEmploymentEditStatus: (index, value) =>
// 			set((state) => ({
// 				employmentDetails: [
// 					...state.employmentDetails.slice(0, index),
// 					{ ...state.employmentDetails[index], edit: value },
// 					...state.employmentDetails.slice(index + 1)
// 				]
// 			})),

// 		deleteEmploymentDetails: (index) =>
// 			set((state) => ({
// 				employmentDetails: [
// 					...state.employmentDetails.slice(0, index),
// 					...state.employmentDetails.slice(index + 1)
// 				]
// 			}))
// 	})
// )

export const createEmploymentSlice: StateCreator<EmploymentDetailsState> = (
	set
) => ({
	employmentDetails: [
		{
			jobRole: "Web Developer",
			employer: "Acme Inc.",
			dateBegin: "10/2021",
			dateEnd: "Present",
			location: "San Diego, CA",
			description:
				"Designed and developed responsive websites and web applications using HTML, CSS, JavaScript, and React.js. Implemented backend functionality using Python and Django. Collaborated with designers and project managers to ensure on-time delivery of projects.",
			edit: false
		},
		{
			jobRole: "Junior Web Developer",
			employer: "Startup Inc.",
			dateBegin: "10/2020",
			dateEnd: "10/2021",
			location: "San Francisco, CA",
			description:
				"Developed and maintained web applications using HTML, CSS, and JavaScript. Troubleshooted and resolved bugs to ensure smooth website operation.",
			edit: false
		}
	],
	employmentActiveForm: false,

	changeEmploymentActiveForm: () =>
		set((state) => ({
			employmentActiveForm: !state.employmentActiveForm
		})),

	updateEmploymentDetails: (newDetails, index) =>
		set((state) => ({
			employmentDetails: [
				...state.employmentDetails.slice(0, index),
				newDetails,
				...state.employmentDetails.slice(index + 1)
			]
		})),

	changeEmploymentEditStatus: (index, value) =>
		set((state) => ({
			employmentDetails: [
				...state.employmentDetails.slice(0, index),
				{ ...state.employmentDetails[index], edit: value },
				...state.employmentDetails.slice(index + 1)
			]
		})),

	deleteEmploymentDetails: (index) =>
		set((state) => ({
			employmentDetails: [
				...state.employmentDetails.slice(0, index),
				...state.employmentDetails.slice(index + 1)
			]
		}))
})
