import Button from '../Button/Button'
import styles from './LogInSingIn.module.scss'
const LogInSingIn = () => {
	return (
		<div className={styles.container}>
			<Button>Log In</Button>
			<Button primary>Sing In</Button>
		</div>
	)
}

export default LogInSingIn
