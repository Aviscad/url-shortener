import { LinksType } from '../services/services'

export default function useToLocalStorage(): [
	(key: string, value: string) => void,
	(key: string) => LinksType[],
] {
	const setLocalStorage = (key: string, value: string) => {
		try {
			window.localStorage.setItem(key, value)
		} catch (error) {
			console.log(error)
		}
	}

	const getLocalStorage = (key: string) => {
		if (window.localStorage.getItem(key) !== null) {
			const val = window.localStorage.getItem(key)
			if (val != null) {
				try {
					return JSON.parse(val)
				} catch (error) {
					return val
				}
			}
		}
		return []
	}

	return [setLocalStorage, getLocalStorage]
}
