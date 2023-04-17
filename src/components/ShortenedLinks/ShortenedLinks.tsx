import { LinksType } from '../../services/services'
import ShortenerResults from '../ShortenerResults/ShortenerResults'

interface ShortenedLinksProps {
	list: LinksType[]
	handleDelete: (value: string) => void
}

/* 
	TO DO:
	- Create New Styles for ShortenerResults Container
	- Remove Relative Position from ShortenerResults
*/

const ShortenedLinks = ({ list, handleDelete }: ShortenedLinksProps) => {
	return (
		<>
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
