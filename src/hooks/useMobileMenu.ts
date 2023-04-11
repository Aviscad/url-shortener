import { useEffect, useState } from 'react'
export function useMobileMenu(): [boolean, boolean, () => void] {
	const [open, setOpen] = useState(false)
	const [mobileMenu, setMobileMenu] = useState(true)

	const toggleChange = () => {
		setOpen(!open)
	}

	useEffect(() => {
		const windowResize = () => {
			if (window.innerWidth > 750) {
				setMobileMenu(false)
				setOpen(true)
			} else {
				setMobileMenu(true)
				setOpen(false)
			}
		}

		if (window.innerWidth > 750) {
			setMobileMenu(false)
			setOpen(true)
		}

		window.addEventListener('resize', windowResize)

		return () => {
			window.removeEventListener('resize', windowResize)
		}
	}, [open])

	return [open, mobileMenu, toggleChange]
}
