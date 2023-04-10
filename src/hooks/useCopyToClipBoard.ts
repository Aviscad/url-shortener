import { useEffect, useState } from 'react'

export default function useCopyToClipboard(): [boolean, (link: string) => void] {
	const [isCopied, setIsCopied] = useState<boolean>(false)

	const handleCopy = (link: string) => {
		if (!link) return
		navigator.clipboard
			.writeText(link)
			.then(() => {
				setIsCopied(true)
			})
			.catch((err) => {
				console.error('Failed to copy: ', err)
			})
	}

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>

		if (isCopied) {
			timer = setTimeout(() => {
				setIsCopied(false)
			}, 1500)
		}

		return () => clearTimeout(timer)
	}, [isCopied])

	return [isCopied, handleCopy]
}
