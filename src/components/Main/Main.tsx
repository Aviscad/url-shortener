import { useState } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'
import { LinksType } from '../../services/services'
import BoostLinks from '../BoostLinks/BoostLinks'
import CardContainer from '../CardContainer/CardContainer'
import ShortenedLinks from '../ShortenedLinks/ShortenedLinks'
import Shortener from '../Shortener/Shortener'
import styles from './Main.module.scss'

const Main = () => {
	const [setLocalStorage, getLocalStorage, delItemLocalStorage] = useLocalStorage()
	const [links, setLinks] = useState<LinksType[]>(getLocalStorage('links'))

	const handleFormSubmit = (info: LinksType) => {
		const newArr = [...links]
		newArr.push(info)
		setLocalStorage('links', JSON.stringify(newArr))
		setLinks(newArr)
	}

	return (
		<main className={styles.container}>
			<Shortener
				handleSubmit={handleFormSubmit}
				links={links}
			/>
			<ShortenedLinks
				list={links}
				handleDelete={delItemLocalStorage}
			/>
			<CardContainer />
			<BoostLinks />
		</main>
	)
}

export default Main
