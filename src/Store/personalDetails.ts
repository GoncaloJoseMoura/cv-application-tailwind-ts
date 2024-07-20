// import { create, State, StateCreator } from "zustand"
import { StateCreator } from "zustand"

export type PersonalDetails = {
	firstName: string
	lastName: string
	email: string
	phone: string
	address: string
	occupation: string
	linkedin: string
	portfolio: string
	about: string
	file: string
}

type Detail = {
	[key: string]: string
}

export type PersonalDetailsState = {
	personalDetails: PersonalDetails
	updateDetails: (newDetail: Detail) => void
}

// export const usePersonalDetailsStore = create<PersonalDetailsState>((set) => ({
// 	personalDetails: {
// 		firstName: "Jonathan",
// 		lastName: "Doe",
// 		email: "jonathan.doe@email.com",
// 		phone: "(555) 555-5555",
// 		address: "San Francisco, California",
// 		occupation: "Web Developer",
// 		linkedin: "https://linkedin.com/username",
// 		portfolio: "https://github.com/username",
// 		about: "Highly motivated and results-oriented Web Developer with 4 years of experience in building user-friendly and responsive web applications. Proven ability to design, develop, and implement web applications using a variety of programming languages and frameworks. Passionate about creating innovative and performant web experiences.",
// 		file: "/profile.jpg"
// 	},
// 	updateDetails: (newDetail) =>
// 		set((state) => ({
// 			personalDetails: { ...state.personalDetails, ...newDetail }
// 		}))
// }))

export const createPersonalDetailsSlice: StateCreator<PersonalDetailsState> = (
	set
) => ({
	personalDetails: {
		firstName: "Jonathan",
		lastName: "Doe",
		email: "jonathan.doe@email.com",
		phone: "(555) 555-5555",
		address: "San Francisco, California",
		occupation: "Web Developer",
		linkedin: "https://linkedin.com/username",
		portfolio: "https://github.com/username",
		about: "Highly motivated and results-oriented Web Developer with 4 years of experience in building user-friendly and responsive web applications. Proven ability to design, develop, and implement web applications using a variety of programming languages and frameworks. Passionate about creating innovative and performant web experiences.",
		file: "/profile.jpg"
	},
	updateDetails: (newDetail) =>
		set((state) => ({
			personalDetails: { ...state.personalDetails, ...newDetail }
		}))
})
