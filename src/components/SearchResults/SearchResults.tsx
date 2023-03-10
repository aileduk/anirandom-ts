import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import { fetchAnime, setSearch } from '../../store/slices/animeSlice'

import { ISearchAnime } from '../../interfaces'

import styles from './SearchResults.module.scss'

type SetActive = React.Dispatch<React.SetStateAction<boolean>>

interface SearchResultsProps {
	anime: ISearchAnime
	setActive: SetActive
}

const SearchResults: FC<SearchResultsProps> = ({ anime, setActive }) => {
	const navigate = useNavigate()

	const dispatch = useAppDispatch()
	const { theme } = useAppSelector(state => state.animeSlice)

	const animeClickHandler = (id: string): void => {
		navigate(`/anime/${id}`)
		dispatch(fetchAnime(id))
		dispatch(setSearch(''))
		setActive(false)
		document.body.classList.toggle('modal')
	}

	return (
		<li
			onClick={animeClickHandler.bind(null, anime.id)}
			className={theme === 'dark' ? `${styles.anime} ${styles.dark}` : styles.anime}>
			<div className={styles.image}>
				<img src={anime.attributes.posterImage.tiny} alt={anime.attributes.canonicalTitle} />
			</div>
			<h2 className={styles.title}>{anime.attributes.canonicalTitle}</h2>
		</li>
	)
}

export default SearchResults
