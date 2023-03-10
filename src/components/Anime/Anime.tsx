import { FC } from 'react'

import { useAppSelector } from '../../hooks/reduxHooks'

import AnimeButton from '../AnimeButton/AnimeButton'

import styles from './Anime.module.scss'

const Anime: FC = () => {
	const { anime, theme } = useAppSelector(state => state.animeSlice)

	return (
		<>
			{anime && (
				<div className={styles.container}>
					<div className={styles.left}>
						<div className={styles.image}>
							<img src={anime.posterImage.small} alt={anime.canonicalTitle} />
						</div>
						<AnimeButton />
					</div>
					<div className={styles.right}>
						<h1 className={styles.title}>{anime.canonicalTitle}</h1>
						<div className={theme === 'dark' ? `${styles.info} ${styles.dark}` : styles.info}>
							<div className={styles.item}>
								<b>Start:</b> {anime.startDate}
							</div>
							<div className={styles.item}>
								<b>End:</b> {anime.endDate}
							</div>
							<div className={styles.item}>
								<b>Duration:</b> {anime.episodeLength}m.
							</div>
							<div className={styles.item}>
								<b>Episodes:</b> {anime.episodeCount}
							</div>
							<div className={styles.item}>
								<b>Type:</b> {anime.showType}
							</div>
						</div>
						<h4 className={styles.subtitle}>Overview</h4>
						<div className={styles.description}>{anime.description}</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Anime
