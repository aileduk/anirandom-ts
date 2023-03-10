import { FC } from 'react'

import AnimeButton from '../AnimeButton/AnimeButton'

import { ReactComponent as Pikachu } from '../../assets/images/pikachu.svg'

import styles from './Main.module.scss'

const Main: FC = () => {
	const textGreeting =
		'Our service will help you quickly choose an anime for every taste, read information about it and understand whether it is worth spending your time on it.'
	return (
		<main className={styles.container}>
			<div className={styles.greeting}>
				<h1 className={styles.title}>
					<span>Hello!</span>
					<span className={styles.emoji}>&#128075;</span>
				</h1>
				<div className={styles.text}>
					<p>{textGreeting}</p>
				</div>
				<AnimeButton />
			</div>
			<div className={styles.image}>
				<Pikachu />
			</div>
		</main>
	)
}

export default Main
