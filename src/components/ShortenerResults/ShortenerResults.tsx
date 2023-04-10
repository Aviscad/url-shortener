import useCopyToClipboard from '../../hooks/useCopyToClipBoard'
import { LinksType } from '../../services/services'
import styles from './ShortenerResults.module.scss'

interface ShortenerResultsProps {
	links: LinksType
	hasError: boolean | null
}

const ShortenerResults = ({ links, hasError }: ShortenerResultsProps) => {
	const [isCopied, handleCopy] = useCopyToClipboard()

	const getClassName = (state: boolean | null): string => {
		if (state === null) return `${styles['move-in-between']} hidden`
		if (hasError) return `${styles['move-in-between']} hidden`
		return styles['move-in-between']
	}

	const getBtnText = () => (!isCopied ? 'Copy' : 'Copied!')

	return (
		<article className={getClassName(hasError)}>
			<p className={styles['original-link']}>{links.original}</p>
			<p className={styles['short-link']}>{links.short}</p>
			<button
				className={isCopied ? 'btn-secondary neutral-dark-2-bg' : 'btn-secondary'}
				onClick={() => handleCopy(links.short)}
			>
				{getBtnText()}
			</button>
		</article>
	)
}

export default ShortenerResults
