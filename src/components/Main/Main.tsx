import { useState } from 'react'

import { LinksType } from '../../services/services'
import Shorten from '../Shortener/Shortener'
import styles from './Main.module.scss'

const Main = () => {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)

	const handleFormSubmit = (info: LinksType) => {
		setData(info)
		//console.log(data)
	}

	const handleError = (err: boolean) => {
		setError(err)
	}

	return (
		<main className={styles.container}>
			<Shorten
				handleSubmit={handleFormSubmit}
				hasError={handleError}
			/>
		</main>
	)
}

export default Main
