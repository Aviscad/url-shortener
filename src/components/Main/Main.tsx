import { useState } from 'react'

import { LinksType } from '../../services/services'
import BoostLinks from '../BoostLinks/BoostLinks'
import CardContainer from '../CardContainer/CardContainer'
import ShortenedLinks from '../ShortenedLinks/ShortenedLinks'
import Shortener from '../Shortener/Shortener'
import styles from './Main.module.scss'

const Main = () => {
	const [links, setLinks] = useState<LinksType[]>([])

	const handleFormSubmit = (info: LinksType) => {
		const newArr = [...links]
		newArr.push(info)
		setLinks(newArr)
	}

	return (
		<main className={styles.container}>
			<Shortener
				handleSubmit={handleFormSubmit}
				links={links}
			/>
			<ShortenedLinks list={links} />
			<CardContainer />
			<BoostLinks />
		</main>
	)
}

export default Main
