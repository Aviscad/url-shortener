import { useState } from 'react'

import Shorten from '../Shortener/Shortener'
import styles from './Main.module.scss'

const Main = () => {
	const [data, setData] = useState({})
	const [error, setError] = useState(false)

	console.log(data, error)
	const handleFormSubmit = (info: string) => {
		setData(info)
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
