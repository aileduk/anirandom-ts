import { FC } from 'react'

import styles from './Preloader.module.scss'

const Preloader: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.preloader}>
				<span className={`${styles.dot} ${styles.dot1}`}></span>
				<span className={`${styles.dot} ${styles.dot2}`}></span>
				<span className={`${styles.dot} ${styles.dot3}`}></span>
				<span className={`${styles.dot} ${styles.dot4}`}></span>
			</div>
		</div>
	)
}

export default Preloader
