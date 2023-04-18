import CARDS_INFO from '../../data/card-data'
import { CardProps } from '../../services/services'
import Card from '../Card/Card'
import styles from './CardContainer.module.scss'

const CardContainer = () => {
	return (
		<section className={styles.wrapper}>
			<h2>Advanced Statistics</h2>
			<p className='paragraph-text'>
				Track how your links are performing across the web with our advanced statistics
				dashboard.
			</p>
			<article className={styles.container}>
				{CARDS_INFO.map((card: CardProps) => {
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
