import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import Logo from '../../ui/Logo/Logo'
import SearchButton from '../SearchButton/SearchButton'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<>
			<header className={styles.container}>
				<Logo />
				<ThemeSwitcher />
				<SearchButton />
			</header>
			<Outlet />
		</>
	)
}

export default Header
