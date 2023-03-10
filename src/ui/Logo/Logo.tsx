import { FC } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/icons/logo.svg'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<Link to='/' className={styles.logo}>
			<span>Anirandom</span>
			<img src={logo} alt='Logo' />
		</Link>
	)
}

export default Logo
