import { LinksType } from '../../services/services'
import ShortenerResults from '../ShortenerResults/ShortenerResults'

interface ShortenedLinksProps {
	list: LinksType[]
}

const ShortenedLinks = ({ list }: ShortenedLinksProps) => {
	return (
		<>
			{list.map((l) => (
				<ShortenerResults
					links={l}
					key={l.short}
				/>
			))}
		</>
	)
}

export default ShortenedLinks
