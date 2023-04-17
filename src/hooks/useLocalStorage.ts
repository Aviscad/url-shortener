import { useState } from 'react'

import { LinksType } from '../services/services'

export default function useToLocalStorage(): [
	(key: string, value: string) => void,
	(key: string) => LinksType[],
	(key: string, value: string) => void,
	LinksType[],
] {
	/* 
		TO DO:
		- Update Links List for all Components
		- Manage state in custom hook and not in parent
		- change getLocalStorage with links
	*/
	const [links, setLinks] = useState<LinksType[]>([])

	const setLocalStorage = (key: string, value: string) => {
		try {
			window.localStorage.setItem(key, value)
			setLinks(getLocalStorage(key))
		} catch (error) {
			console.log(error)
		}
	}

	const getLocalStorage = (key: string): LinksType[] => {
		if (window.localStorage.getItem(key) !== null) {
			const val = window.localStorage.getItem(key)
			if (val != null) {
				try {
					return JSON.parse(val)
				} catch (error) {
					throw new Error("Couldn't parse")
				}
			}
		}
		return []
	}

	const delItemLocalStorage = (key: string, value: string) => {
		if (window.localStorage.getItem(key) !== null) {
			const values = getLocalStorage(key)
			const newValues = values.filter((item) => item.original !== value)
			setLocalStorage(key, JSON.stringify(newValues))
			console.log(getLocalStorage(key))
		}
	}

	return [setLocalStorage, getLocalStorage, delItemLocalStorage, links]
}
