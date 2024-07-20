// import { create, State, StateCreator } from "zustand"
import { StateCreator } from "zustand"

export type LanguageState = {
	language: string[]
	addLanguage: (language: string) => void
	deleteLanguage: (index: number) => void
}

// export const useLanguageStore = create<LanguageState>((set) => ({
// 	language: ["Portuguese", "Spanish", "Italian"],
// 	addLanguage: (language) =>
// 		set((state) => ({
// 			language: [...state.language, language]
// 		})),
// 	deleteLanguage: (index) =>
// 		set((state) => ({
// 			language: [
// 				...state.language.slice(0, index),
// 				...state.language.slice(index + 1)
// 			]
// 		}))
// }))

export const createLanguageSlice: StateCreator<LanguageState> = (set) => ({
	language: ["Portuguese", "Spanish", "Italian"],
	addLanguage: (language) =>
		set((state) => ({
			language: [...state.language, language]
		})),
	deleteLanguage: (index) =>
		set((state) => ({
			language: [
				...state.language.slice(0, index),
				...state.language.slice(index + 1)
			]
		}))
})
