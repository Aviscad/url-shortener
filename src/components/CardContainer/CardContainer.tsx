import CARDS_INFO from '../../data/card-data'
import { cardProps } from '../../services/services'
import Card from '../Card/Card'
import styles from './CardContainer.module.scss'

const CardContainer = () => {
	return (
		<section>
			<h2>Advanced Statistics</h2>
			<p className='paragraph-text'>
				Track how your links are performing across the web with our advanced statistics
				dashboard.
			</p>
			<article className={styles.container}>
				{CARDS_INFO.map((card: cardProps) => {
					return (
						<Card
							title={card.title}
							text={card.text}
							icon={card.icon}
							key={card.id}
						/>
					)
				})}
			</article>
		</section>
	)
}

export default CardContainer
