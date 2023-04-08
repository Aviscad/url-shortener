import imgUrl from '/src/assets/images/illustration-working.svg'

import Button from '../Button/Button'
import Navbar from '../Navbar/Navbar'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<header className={styles.container}>
			<div className={styles.menu}>
				<Navbar />
			</div>
			<div className={styles.content}>
				<div>
					<img
						src={imgUrl}
						alt='Woman working on a desktop pc'
					/>
				</div>
				<div className={styles['header-text']}>
					<h1 className='main-title'>More than just shorter links</h1>
					<p className='paragraph-text'>
						Build your brand’s recognition and get detailed insights on how your links are
						performing.
					</p>
					<Button primary>Get Started</Button>
				</div>
			</div>
		</header>
	)
}
