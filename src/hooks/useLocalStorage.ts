import { useEffect, useState } from 'react'

import { LinksType } from '../services/services'

export default function useToLocalStorage(
	localStorageKey: string,
): [(value: string) => void, (value: string) => void, LinksType[]] {
	const [links, setLinks] = useState<LinksType[]>([])

	const setLocalStorage = (value: string) => {
		try {
			window.localStorage.setItem(localStorageKey, value)
			setLinks(getLocalStorage())
		} catch (error) {
			console.log(error)
		}
	}

	const getLocalStorage = (): LinksType[] => {
		if (window.localStorage.getItem(localStorageKey) !== null) {
			const val = window.localStorage.getItem(localStorageKey)
			if (val != null) {
				try {
					return JSON.parse(val)
				} catch (error) {
					throw new Error(`Couldn't parse the element ${localStorageKey}}`)
				}
			}
		}
		return []
	}

	const delItemLocalStorage = (value: string) => {
		if (window.localStorage.getItem(localStorageKey) !== null) {
			const values = getLocalStorage()
			const newValues = values.filter((item) => item.original !== value)
			setLocalStorage(JSON.stringify(newValues))
		}
	}

	useEffect(() => {
		if (getLocalStorage().length > 0) setLinks(getLocalStorage())
	}, [])

	return [setLocalStorage, delItemLocalStorage, links]
}
