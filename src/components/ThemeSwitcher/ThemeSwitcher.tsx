import { FC } from 'react'

import { setTheme } from '../../store/slices/animeSlice'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher: FC = () => {
	const dispatch = useAppDispatch()
	const { theme } = useAppSelector(state => state.animeSlice)

	localStorage.setItem('theme', theme)

	const toggleTheme = () => {
		dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
	}

	if (theme === 'dark') {
		document.body.classList.add('dark')
	} else {
		document.body.classList.remove('dark')
	}

	return (
		<div className={styles.switcher}>
			<input type='checkbox' id='switch' onChange={toggleTheme} checked={theme === 'dark'} />
			<label htmlFor='switch'></label>
			<span className={styles.circle}></span>
			<span className={`${styles.icon} ${styles.sun}`}>&#127774;</span>
			<span className={`${styles.icon} ${styles.moon}`}>&#127771;</span>
		</div>
	)
}

export default ThemeSwitcher
