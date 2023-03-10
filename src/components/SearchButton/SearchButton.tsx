import { FC, useState } from 'react'

import { useAppDispatch } from '../../hooks/reduxHooks'

import Modal from '../Modal/Modal'

import { setSearch } from '../../store/slices/animeSlice'

import { ReactComponent as SearchSvg } from '../../assets/images/icons/search.svg'

import styles from './SearchButton.module.scss'

const SearchButton: FC = () => {
	const dispatch = useAppDispatch()

	const [modalActive, setModalActive] = useState<boolean>(false)

	const toggleModal = (): void => {
		dispatch(setSearch(''))
		setModalActive(prev => !prev)
		document.body.classList.toggle('modal')
	}

	return (
		<>
			<button onClick={toggleModal} className={styles.button}>
				<SearchSvg />
			</button>
			<Modal active={modalActive} setActive={setModalActive} toggleModal={toggleModal} />
		</>
	)
}

export default SearchButton
