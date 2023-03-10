import { FC } from 'react'

import AnimeButton from '../../components/AnimeButton/AnimeButton'

import styles from './Error.module.scss'

interface ErrorProps {
	error: string | null | undefined
}

const Error: FC<ErrorProps> = ({ error }) => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>Error: {error}</div>
			<div className={styles.text}>You can try running the request again</div>
			<AnimeButton />
		</div>
	)
}

export default Error
