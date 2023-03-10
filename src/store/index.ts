import { configureStore } from "@reduxjs/toolkit"

import animeSlice from "./slices/animeSlice"

const store = configureStore({
	reducer: { animeSlice },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
