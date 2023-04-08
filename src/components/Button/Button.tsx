import { ReactNode } from 'react'

interface ButtonPropTypes {
	primary?: boolean
	secondary?: boolean
	children: ReactNode | string
}

const Button = ({ children, primary, secondary }: ButtonPropTypes) => {
	if (primary && secondary)
		throw new Error("Can't use primary and secondary at the same time on Button")

	const assingButtonClass = () => {
		if (primary === undefined && secondary === undefined) return 'btn'
		if (primary) return 'btn-primary'
		if (secondary) return 'btn-secondary'
	}

	return <button className={assingButtonClass()}>{children}</button>
}

export default Button
