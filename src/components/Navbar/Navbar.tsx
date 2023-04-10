import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import { ReactComponent as Logo } from '/src/assets/images/logo.svg'

import LogSingIn from '../LogInSingIn/LogInSingIn'
import styles from './Navbar.module.scss'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [mobileMenu, setMobileMenu] = useState(true)

	useEffect(() => {
		const windowResize = () => {
			if (window.innerWidth > 750) {
				setMobileMenu(false)
				setOpen(true)
			} else {
				setMobileMenu(true)
				setOpen(false)
			}
		}

		if (window.innerWidth > 750) {
			setMobileMenu(false)
			setOpen(true)
		}

		window.addEventListener('resize', windowResize)

		return () => {
			window.removeEventListener('resize', windowResize)
		}
	}, [open])

	const toggleChange = () => {
		setOpen(!open)
	}

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
					onClick={toggleChange}
					color='hsl(257, 7%, 63%)'
					size='2x'
					className={!open ? '' : styles['fade-in']}
				/>
			)}
		</nav>
	)
}
export default Navbar
