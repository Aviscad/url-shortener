import { LinksType } from '../../services/services'
import ShortenerResults from '../ShortenerResults/ShortenerResults'

interface ShortenedLinksProps {
	list: LinksType[]
	handleDelete: (value: string) => void
	message: string
}
const ShortenedLinks = ({ list, handleDelete, message }: ShortenedLinksProps) => {
	return (
		<>
			<small className='small-text'>{message}</small>
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
