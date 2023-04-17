import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useCopyToClipboard from '../../hooks/useCopyToClipBoard'
import { LinksType } from '../../services/services'
import styles from './ShortenerResults.module.scss'

interface ShortenerResultsProps {
	links: LinksType
	onDelete: (value: string) => void
}

const ShortenerResults = ({ links, onDelete }: ShortenerResultsProps) => {
	const [isCopied, handleCopy] = useCopyToClipboard()

	const getBtnText = () => (!isCopied ? 'Copy' : 'Copied!')

	return (
		<article className={styles['move-in-between']}>
			<a
				className={styles['original-link']}
				href={links.original}
				target='_blank'
				rel='noreferrer'
			>
				{links.original}
			</a>
			<a
				className={styles['short-link']}
				href={links.short}
				target='_blank'
				rel='noreferrer'
			>
				{links.short}
			</a>
			<button
				className={isCopied ? 'btn-secondary neutral-dark-2-bg' : 'btn-secondary'}
				onClick={() => handleCopy(links.short)}
			>
				{getBtnText()}
			</button>
			<FontAwesomeIcon
				className='text-secondary icon'
				icon={faTrashAlt}
				size='xl'
				onClick={() => onDelete(links.original)}
			/>
		</article>
	)
}

export default ShortenerResults
