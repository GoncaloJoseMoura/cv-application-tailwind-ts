import { create, StoreApi, UseBoundStore } from "zustand"

import { createReferencesSlice, type ReferencesDetailsState } from "./referencesDetails"

import {
    createEducationSlice,
    type EducationDetailsState
} from "./educationDetails"
import {
    createEmploymentSlice,
    type EmploymentDetailsState
} from "./employmentDetails"
import { createLanguageSlice, type LanguageState } from "./languageDetails"
import { createSkillSlice, type SkillsState } from "./skillDetails"
import {
    createPersonalDetailsSlice,
    type PersonalDetailsState
} from "./personalDetails"

type AppState = LanguageState &
    SkillsState &
    EducationDetailsState &
    EmploymentDetailsState &
    PersonalDetailsState &
    ReferencesDetailsState

export const useBoundStore = create<AppState>()((...a) => ({
    ...createEducationSlice(...a),
    ...createEmploymentSlice(...a),
    ...createLanguageSlice(...a),
    ...createSkillSlice(...a),
    ...createPersonalDetailsSlice(...a),
    ...createReferencesSlice(...a)
}))

type WithSelectors<S> = S extends { getState: () => infer T }
    ? S & { use: { [K in keyof T]: () => T[K] } }
    : never

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
    _store: S
) => {
    let store = _store as WithSelectors<typeof _store>
    store.use = {}
    for (let k of Object.keys(store.getState())) {
        ; (store.use as any)[k] = () => store((s) => s[k as keyof typeof s])
    }

    return store
}

export const useStore = createSelectors(useBoundStore)
