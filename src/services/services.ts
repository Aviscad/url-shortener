export interface LinksType {
	short: string
	original: string
}

export interface CardProps {
	id?: number
	title: string
	text: string
	icon: string
}

export const isAlreadyShortened = (links: LinksType[], link: string) => {
	const isShortened: LinksType[] = links.filter((l) => {
		return l.original === link ||
			l.original === 'http://' + link ||
			l.original === 'https://' + link
			? true
			: false
	})
	return isShortened.length === 0 ? false : true
}

export const filterLocalStorage = (word: string, links: LinksType[]) => {
	const values = links.filter((link) => link.original.includes(word))
	return values.length > 0 ? values : []
}
