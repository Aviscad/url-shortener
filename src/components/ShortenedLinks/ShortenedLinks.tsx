import { LinksType } from '../../services/services'
import ShortenerResults from '../ShortenerResults/ShortenerResults'

interface ShortenedLinksProps {
	list: LinksType[]
	handleDelete: (key: string, value: string) => void
}

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
