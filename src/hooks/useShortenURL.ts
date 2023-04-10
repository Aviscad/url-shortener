import { useEffect, useState } from 'react'

interface shortenURLProps {
	url: string
	hasError: (err: boolean) => void
}

interface responseLinksType {
	short: string
	original: string
}

export default function useShortenURL({
	url,
	hasError,
}: shortenURLProps): [boolean, string, responseLinksType] {
	const [error, setError] = useState(false)
	const [errorText, setErrorText] = useState('')
	const [responseLinks, setResponseLinks] = useState<responseLinksType>({
		short: '',
		original: '',
	})

	useEffect(() => {
		const shortenURL = async () => {
			if (url) {
				const shortenURL = await fetch('https://api.shrtco.de/v2/shorten?url=' + url)
				const json = await shortenURL.json()
				if (json.ok) {
					const response = await json.result

					const responseLinks = {
						short: response['full_short_link'],
						original: response['original_link'],
					}
					setResponseLinks(responseLinks)
					setError(false)
					hasError(false)
					setErrorText('')
				} else {
					setError(true)
					hasError(true)
					setErrorText(json.error)
				}
			}
		}
		shortenURL()
	}, [url])

	return [error, errorText, responseLinks]
}
