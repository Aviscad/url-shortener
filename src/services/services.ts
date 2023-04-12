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
