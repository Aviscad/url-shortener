import { useState } from 'react'

import { LinksType } from '../../services/services'
import CardContainer from '../CardContainer/CardContainer'
import Shortener from '../Shortener/Shortener'
import ShortenerResults from '../ShortenerResults/ShortenerResults'
import styles from './Main.module.scss'

const Main = () => {
	const [data, setData] = useState<LinksType>({ short: '', original: '' })
	const [error, setError] = useState<boolean | null>(null)

	const handleFormSubmit = (info: LinksType) => {
		setData(info)
	}

	const handleError = (err: boolean) => {
		setError(err)
	}

	return (
		<main className={styles.container}>
			<Shortener
				handleSubmit={handleFormSubmit}
				hasError={handleError}
			/>
			<ShortenerResults
				links={data}
				hasError={error}
			/>
			<CardContainer />
		</main>
	)
}

export default Main
