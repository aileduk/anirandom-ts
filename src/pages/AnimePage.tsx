import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'

import Anime from '../components/Anime/Anime'
import Error from '../ui/Error/Error'
import Preloader from '../ui/Preloader/Preloader'

import { Status, fetchAnime } from '../store/slices/animeSlice'

const AnimePage: FC = () => {
	const { id } = useParams()

	const dispatch = useAppDispatch()
	const { status, error } = useAppSelector(state => state.animeSlice)

	useEffect(() => {
		if (id) dispatch(fetchAnime(id))
	}, [dispatch, id])

	return (
		<>
			{status === Status.LOADING && <Preloader />}
			{status === Status.SUCCESS && <Anime />}
			{status === Status.ERROR && <Error error={error} />}
		</>
	)
}

export default AnimePage
