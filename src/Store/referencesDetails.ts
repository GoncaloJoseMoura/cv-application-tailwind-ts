// import { create, State, StateCreator } from "zustand"
import { StateCreator } from "zustand"

export type ReferencesDetails = {
    company: string
    name: string
    email: string
    phone: string,
    edit: boolean
}

export type ReferencesDetailsState = {
    referencesDetails: ReferencesDetails[]
    referencesActiveForm: boolean
    changeReferencesActiveForm: () => void
    updateReferencesDetails: (newDetail: ReferencesDetails, index: number) => void
    changeReferencesEditStatus: (index: number, value: boolean) => void
    deleteReferencesDetails: (index: number) => void
}

export const createReferencesSlice: StateCreator<ReferencesDetailsState> = (
    set
) => ({
    referencesDetails: [
        {
            company: "Ecmo",
            name: "John Doe",
            email: "john.doe@gmail.com",
            phone: "+351 123123123",
            edit: false
        }
    ],
    referencesActiveForm: false,

    changeReferencesActiveForm: () =>
        set((state) => ({
            referencesActiveForm: !state.referencesActiveForm
        })),

    updateReferencesDetails: (newDetail, index) =>
        set((state) => ({
            referencesDetails: [
                ...state.referencesDetails.slice(0, index),
                newDetail,
                ...state.referencesDetails.slice(index + 1)
            ]
        })),

    changeReferencesEditStatus: (index, value) =>
        set((state) => ({
            referencesDetails: [
                ...state.referencesDetails.slice(0, index),
                { ...state.referencesDetails[index], edit: value },
                ...state.referencesDetails.slice(index + 1)
            ]
        })),

    deleteReferencesDetails: (index) =>
        set((state) => ({
            referencesDetails: [
                ...state.referencesDetails.slice(0, index),
                ...state.referencesDetails.slice(index + 1)
            ]
        }))
})
