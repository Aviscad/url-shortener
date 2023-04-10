import {
	faFacebook,
	faInstagram,
	faPinterest,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ReactComponent as Logo } from '/src/assets/images/logo.svg'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<Logo className={styles.logo} />
			<div className={styles['list-container']}>
				<h4>Features</h4>
				<ul>
					<li className='list-text'>Link Shortening</li>
					<li className='list-text'>Branded Links</li>
					<li className='list-text'>Analytics</li>
				</ul>
			</div>
			<div className={styles['list-container']}>
				<h4>Resources</h4>
				<ul>
					<li className='list-text'>Blog</li>
					<li className='list-text'>Developers</li>
					<li className='list-text'>Support</li>
				</ul>
			</div>
			<div className={styles['list-container']}>
				<h4>Company</h4>
				<ul>
					<li className='list-text'>About</li>
					<li className='list-text'>Our Team</li>
					<li className='list-text'>Careers</li>
					<li className='list-text'>Contact</li>
				</ul>
			</div>
			<div className={styles['media-container']}>
				<a
					href='https://www.facebook.com/'
					target='_blank'
					className='media-icon'
					rel='noreferrer'
				>
					<FontAwesomeIcon
						icon={faFacebook}
						size='2x'
					/>
				</a>
				<a
					href='https://twitter.com/'
					target='_blank'
					className='media-icon'
					rel='noreferrer'
				>
					<FontAwesomeIcon
						icon={faTwitter}
						size='2x'
					/>
				</a>
				<a
					href='https://www.pinterest.com/'
					target='_blank'
					className='media-icon'
					rel='noreferrer'
				>
					<FontAwesomeIcon
						icon={faPinterest}
						size='2x'
					/>
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					className='media-icon'
					rel='noreferrer'
				>
					<FontAwesomeIcon
						icon={faInstagram}
						size='2x'
					/>
				</a>
			</div>
		</footer>
	)
}

export default Footer
