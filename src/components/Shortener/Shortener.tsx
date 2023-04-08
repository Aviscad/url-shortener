import { FormEvent, useEffect, useRef, useState } from 'react'

import styles from './Shortener.module.scss'

interface ShortenerProps {
	handleSubmit: (info: string) => void
	hasError: (err: boolean) => void
}

const Shorten = ({ handleSubmit, hasError }: ShortenerProps) => {
	const inputURL = useRef<null | HTMLInputElement>(null)
	const [url, setURL] = useState('')
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState('')

	const handleSub = (e: FormEvent) => {
		e.preventDefault()
		if (inputURL.current !== null) setURL(inputURL.current.value)
	}

	useEffect(() => {
		if (url === '') return
		const shortenURL = async () => {
			if (inputURL.current) {
				inputURL.current.classList.remove('input-error')
				inputURL.current.classList.remove('shake')

				const shortenURL = await fetch('https://api.shrtco.de/v2/shorten?url=' + url)
				const json = await shortenURL.json()
				if (json.ok) {
					const response = await json.result
					handleSubmit(response)
					setError(false)
					hasError(false)
					setErrorText('')
				} else {
					setError(true)
					hasError(true)
					setErrorText(json.error)

					inputURL.current.focus()
					inputURL.current.classList.add('input-error')
					inputURL.current.classList.add('shake')
				}
			}
		}
		shortenURL()
	}, [url])

	return (
		<form
			className={styles['move-in-between']}
			onSubmit={(e) => {
				handleSub(e)
			}}
		>
			<input
				ref={inputURL}
				type='text'
				className='input-text'
				placeholder='Shorten a Link Here...'
				required
			/>
			{error && <small className={styles.error}>{errorText}</small>}
			<button className='btn-secondary'>Shorten It!</button>
		</form>
	)
}

export default Shorten
