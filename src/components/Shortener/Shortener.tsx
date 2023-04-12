import useShortener from '../../hooks/useShortener'
import { LinksType } from '../../services/services'
import styles from './Shortener.module.scss'

interface ShortenerProps {
	handleSubmit: (info: LinksType) => void
	links: LinksType[]
}

const Shortener = ({ handleSubmit, links }: ShortenerProps) => {
	const { inputURL, handleSub, error, errorText } = useShortener({
		handleSubmit,
		links,
	})

	return (
		<form
			className={styles['move-in-between']}
			onSubmit={(e) => {
				handleSub(e)
			}}
		>
			<input
				ref={inputURL}
				type='text'
				className='input-text'
				placeholder='Shorten a Link Here...'
				required
			/>
			{error && <small className={styles.error}>{errorText}</small>}
			<button className='btn-secondary'>Shorten It!</button>
		</form>
	)
}

export default Shortener
