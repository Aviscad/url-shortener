import { FormEvent, useEffect, useRef, useState } from 'react'

import { isAlreadyShortened, LinksType } from '../services/services'

interface UseShortenerProps {
	handleSubmit: (info: LinksType) => void
	links: LinksType[]
}

export default function useShortener({ handleSubmit, links }: UseShortenerProps) {
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
			if (inputURL.current && !isAlreadyShortened(links, url)) {
				inputURL.current.classList.remove('input-error')
				inputURL.current.classList.remove('shake')

				const shortenURL = await fetch('https://api.shrtco.de/v2/shorten?url=' + url)
				const json = await shortenURL.json()
				if (json.ok) {
					const response = await json.result

					const responseLinks: LinksType = {
						short: response['full_short_link'],
						original: response['original_link'],
					}

					handleSubmit(responseLinks)
					setError(false)
					setErrorText('')
					inputURL.current.value = ''
				} else {
					setError(true)
					setErrorText(json.error)

					inputURL.current.focus()
					inputURL.current.select()
					inputURL.current.classList.add('input-error')
					inputURL.current.classList.add('shake')
				}
			} else {
				if (inputURL.current) {
					inputURL.current.focus()
					inputURL.current.select()
					inputURL.current.classList.add('input-error')
					inputURL.current.classList.add('shake')
					setError(true)
					setErrorText(`The url ${url} has already been shortened!`)
				}
			}
		}
		shortenURL()
	}, [url])

	return {
		inputURL,
		handleSub,
		error,
		errorText,
	}
}
