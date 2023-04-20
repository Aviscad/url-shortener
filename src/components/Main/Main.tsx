import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import useDebounce from '../../hooks/useDebounce'
import useLocalStorage from '../../hooks/useLocalStorage'
import { filterLocalStorage, LinksType } from '../../services/services'
import BoostLinks from '../BoostLinks/BoostLinks'
import CardContainer from '../CardContainer/CardContainer'
import ShortenedLinks from '../ShortenedLinks/ShortenedLinks'
import Shortener from '../Shortener/Shortener'
import styles from './Main.module.scss'

const Main = () => {
	const [setLocalStorage, delItemLocalStorage, links] = useLocalStorage('links')
	const [helper, setHelper] = useState(links || [])
	const [word, setWord] = useState('')
	const debouncedValue = useDebounce(word)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const values = filterLocalStorage(debouncedValue, links)
		setHelper(values)
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value
		setWord(text)
	}

	const handleFormSubmit = (info: LinksType) => {
		const newArr = [...links]
		newArr.push(info)
		setLocalStorage(JSON.stringify(newArr))
	}

	useEffect(() => {
		setHelper(filterLocalStorage(debouncedValue, links))
	}, [debouncedValue])

	return (
		<main className={styles.container}>
			<Shortener
				handleSubmit={handleFormSubmit}
				links={links}
			/>
			<form onSubmit={handleSubmit}>
				<input
					type='search'
					value={word}
					onChange={handleChange}
				/>
			</form>
			<ShortenedLinks
				list={debouncedValue === '' ? links : helper}
				handleDelete={delItemLocalStorage}
			/>
			<CardContainer />
			<BoostLinks />
		</main>
	)
}

export default Main
