import React, { FC, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import SearchResults from '../SearchResults/SearchResults'

import { Status, findAnime, setSearch } from '../../store/slices/animeSlice'

import styles from './Modal.module.scss'

type SetActive = React.Dispatch<React.SetStateAction<boolean>>

interface ModalProps {
	active: boolean
	toggleModal: () => void
	setActive: SetActive
}

const Modal: FC<ModalProps> = ({ active, toggleModal, setActive }) => {
	const dispatch = useAppDispatch()
	const { theme, searchAnime, searchStatus, search } = useAppSelector(state => state.animeSlice)

	useEffect(() => {
		const delay = setTimeout(() => {
			dispatch(findAnime(search))
		}, 300)
		return () => clearTimeout(delay)
	}, [dispatch, search])

	const results =
		searchAnime.length && search.length ? (
			<>
				{searchStatus === Status.LOADING && <div className={styles.loading}>Search...</div>}
				{searchStatus === Status.SUCCESS && (
					<ul className={styles.list}>
						{searchAnime.map(anime => (
							<SearchResults setActive={setActive} key={anime.id} anime={anime} />
						))}
					</ul>
				)}
			</>
		) : !searchAnime.length && search.length ? (
			<div className={styles.noResult}>No result for "{search}"</div>
		) : (
			<div className={styles.noResult}>No recent search</div>
		)

	return (
		<div onClick={toggleModal} className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
			<div
				onClick={e => e.stopPropagation()}
				className={theme === 'dark' ? `${styles.content} ${styles.dark}` : styles.content}>
				<div className={styles.input}>
					<input
						type='text'
						placeholder='Search...'
						value={search}
						onChange={e => dispatch(setSearch(e.target.value))}
					/>
				</div>
				<div className={styles.result}>{results}</div>
			</div>
		</div>
	)
}

export default Modal
