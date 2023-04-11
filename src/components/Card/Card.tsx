import { faChartLine, faGauge, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CardProps } from '../../services/services'
import styles from './Card.module.scss'

const Card = ({ title, text, icon }: CardProps) => {
	const getIcon = () => {
		if (icon === 'faChartLine') return faChartLine
		if (icon === 'faGauge') return faGauge
		return faPaintBrush
	}

	return (
		<div className={`${styles['card-container']} shadow`}>
			<div className={styles.circle}>
				<FontAwesomeIcon
					icon={getIcon()}
					size='2x'
				/>
			</div>
			<h3 className={styles['card-title']}>{title}</h3>
			<p className='paragraph-text'>{text}</p>
		</div>
	)
}

export default Card
