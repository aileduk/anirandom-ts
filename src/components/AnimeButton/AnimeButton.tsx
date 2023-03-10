import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { randomInteger } from '../../helpers/randomInteger'

import styles from './AnimeButton.module.scss'

const AnimeButton: FC = () => {
	const location = useLocation()

	const id = randomInteger(0, 15000)

	const text = location.pathname === '/' ? 'Random anime' : 'Another random anime'

	return (
		<Link to={`/anime/${id}`} className={styles.button}>
			{text}
		</Link>
	)
}

export default AnimeButton
