import { LinksType } from '../../services/services'
import ShortenerResults from '../ShortenerResults/ShortenerResults'

interface ShortenedLinksProps {
	list: LinksType[]
	handleDelete: (value: string) => void
}
const ShortenedLinks = ({ list, handleDelete }: ShortenedLinksProps) => {
	console.log('I render!')
	return (
		<>
			{list.length === 0 && 'The word is not part of any saved link'}
			{list.map((l) => (
				<ShortenerResults
					links={l}
					key={l.short}
					onDelete={handleDelete}
				/>
			))}
		</>
	)
}

export default ShortenedLinks
