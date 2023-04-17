import useLocalStorage from '../../hooks/useLocalStorage'
import { LinksType } from '../../services/services'
import BoostLinks from '../BoostLinks/BoostLinks'
import CardContainer from '../CardContainer/CardContainer'
import ShortenedLinks from '../ShortenedLinks/ShortenedLinks'
import Shortener from '../Shortener/Shortener'
import styles from './Main.module.scss'

const Main = () => {
	const [setLocalStorage, delItemLocalStorage, links] = useLocalStorage('links')

	const handleFormSubmit = (info: LinksType) => {
		const newArr = [...links]
		newArr.push(info)
		setLocalStorage(JSON.stringify(newArr))
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
