// import { create, State, StateCreator } from "zustand"
import { StateCreator } from "zustand"
import { v4 as uuidv4 } from "uuid"

export type Skill = { id?: string; category?: string; tools?: string }

export type SkillsState = {
	skills: Skill[]
	addSkill: (skill: Skill) => void
	updateSkill: (newDetail: Skill, index: number) => void
	deleteSkill: (index: number) => void
}

// export const useSkillsStore = create<SkillsState>((set) => ({
// 	skills: [
// 		{
// 			category: "Programming Languages",
// 			tools: "HTML, CSS, Javascript"
// 		},
// 		{
// 			category: "Cloud services",
// 			tools: "Amazon Web Services, Google Cloud Platform"
// 		},
// 		{
// 			category: "Web Technologies",
// 			tools: "React, Angular, Vue.js"
// 		},
// 		{
// 			category: "Databases",
// 			tools: "MySQL, PostgreSQL, MongoDB"
// 		}
// 	],
// 	addSkill: (skill) =>
// 		set((state) => ({
// 			skills: [...state.skills, skill]
// 		})),

// 	updateSkill: (newDetails, index) =>
// 		set((state) => ({
// 			skills: [
// 				...state.skills.slice(0, index),
// 				newDetails,
// 				...state.skills.slice(index + 1)
// 			]
// 		})),
// 	deleteSkill: (index) =>
// 		set((state) => ({
// 			skills: [
// 				...state.skills.slice(0, index),
// 				...state.skills.slice(index + 1)
// 			]
// 		}))
// }))

export const createSkillSlice: StateCreator<SkillsState> = (set) => ({
	skills: [
		{
			id: "0",
			category: "Programming Languages",
			tools: "HTML, CSS, Javascript"
		},
		{
			id: "1",
			category: "Cloud services",
			tools: "Amazon Web Services, Google Cloud Platform"
		},
		{
			id: "2",
			category: "Web Technologies",
			tools: "React, Angular, Vue.js"
		},
		{
			id: "3",
			category: "Databases",
			tools: "MySQL, PostgreSQL, MongoDB"
		}
	],
	addSkill: (skill) => {
		skill.id = uuidv4()
		set((state) => ({
			skills: [...state.skills, skill]
		}))
	},
	updateSkill: (newDetails, index) =>
		set((state) => ({
			skills: [
				...state.skills.slice(0, index),
				newDetails,
				...state.skills.slice(index + 1)
			]
		})),

	deleteSkill: (index) =>
		set((state) => ({
			skills: [
				...state.skills.slice(0, index),
				...state.skills.slice(index + 1)
			]
		}))
})
