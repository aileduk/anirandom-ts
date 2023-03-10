import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { IAnime, ISearchAnime } from '../../interfaces'

const URL = 'https://kitsu.io/api/edge/anime/'
const SEARCH_URL = 'https://kitsu.io/api/edge/anime?filter[text]='

export const fetchAnime = createAsyncThunk<IAnime, string, { rejectValue: string }>(
	'anime/fetchAnime',
	async function (id, { rejectWithValue }) {
		const response = await axios.get(`${URL}${id}`)
		if (response.status !== 200) {
			return rejectWithValue('Server error!')
		}
		return response.data.data.attributes
	}
)

export const findAnime = createAsyncThunk<ISearchAnime[], string>('anime/findAnime', async title => {
	const response = await axios.get(`${SEARCH_URL}${title}`)
	return response.data.data
})

export enum Status {
	LOADING = 'loading',
	SUCCESS = 'succsess',
	ERROR = 'error'
}

interface IAnimeState {
	anime: IAnime | null
	searchAnime: ISearchAnime[]
	status: Status | null
	searchStatus: Status | null
	search: string
	error: string | null | undefined
	theme: string
}

const storedTheme = localStorage.getItem('theme')
const defaultTheme = 'light'

const initialState: IAnimeState = {
	anime: null,
	searchAnime: [],
	status: null,
	searchStatus: null,
	search: '',
	error: null,
	theme: storedTheme !== null ? storedTheme : defaultTheme
}

const animeSlice = createSlice({
	name: 'anime',
	initialState,
	reducers: {
		setTheme(state, actions: PayloadAction<string>) {
			state.theme = actions.payload
		},
		setSearch(state, actions: PayloadAction<string>) {
			state.search = actions.payload
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchAnime.pending, state => {
			state.status = Status.LOADING
		})
		builder.addCase(fetchAnime.fulfilled, (state, actions) => {
			state.anime = actions.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchAnime.rejected, (state, actions) => {
			state.error = actions.payload
			state.status = Status.ERROR
		})
		builder.addCase(findAnime.pending, state => {
			state.searchStatus = Status.LOADING
		})
		builder.addCase(findAnime.fulfilled, (state, actions) => {
			state.searchAnime = actions.payload
			state.searchStatus = Status.SUCCESS
		})
	}
})

export default animeSlice.reducer
export const { setTheme, setSearch } = animeSlice.actions
