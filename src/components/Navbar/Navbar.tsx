import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ReactComponent as Logo } from '/src/assets/images/logo.svg'

import { useMobileMenu } from '../../hooks/useMobileMenu'
import LogSingIn from '../LogInSingIn/LogInSingIn'
import styles from './Navbar.module.scss'

const Navbar = () => {
	const [open, mobileMenu, toggleChange] = useMobileMenu()

	return (
		<nav className={styles.navbar}>
			{mobileMenu && <Logo />}
			<ul className={open ? styles.vissible : `${styles.vissible} hidden`}>
				{!mobileMenu && (
					<li className={styles['list-item']}>
						<Logo />
					</li>
				)}
				<li className={styles['list-item']}>
					<a
						href='https://github.com/Aviscad/url-shortener'
						target='_blank'
						rel='noreferrer'
					>
						Features
					</a>
				</li>
				<li className={styles['list-item']}>
					<a
						href='https://github.com/Aviscad/url-shortener'
						target='_blank'
						rel='noreferrer'
					>
						Pricing
					</a>
				</li>
				<li className={styles['list-item']}>
					<a
						href='https://github.com/Aviscad/url-shortener'
						target='_blank'
						rel='noreferrer'
					>
						Resources
					</a>
				</li>
				{mobileMenu && (
					<li className={styles['list-item']}>
						<LogSingIn />
					</li>
				)}
			</ul>
			{!mobileMenu && <LogSingIn />}
			{mobileMenu && (
				<FontAwesomeIcon
					icon={!open ? faBars : faXmark}
					onClick={() => toggleChange()}
					color='hsl(257, 7%, 63%)'
					size='2x'
					className={!open ? '' : styles['fade-in']}
				/>
			)}
		</nav>
	)
}
export default Navbar
