import { useEffect, useState } from 'react'

export default function useCopyToClipboard() {
	const [copied, setCopied] = useState(false)

	const handleCopy = async (link: string) => {
		if (!copied && link !== '') {
			try {
				await navigator.clipboard.writeText(link)
				setCopied(!copied)
			} catch (err) {
				console.error('Failed to copy: ', err)
			}
		}
	}

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>

		if (copied) {
			timer = setTimeout(() => {
				setCopied(false)
			}, 1500)
		}

		return () => clearTimeout(timer)
	}, [copied])

	return [copied, handleCopy]
}
