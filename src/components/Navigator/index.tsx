import styles from './Navigator.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';

const Navigator = () => {
	return (
		<>
			<nav className={styles.navigator}>
				<Logo />
                Sobre
			</nav>
		</>
	);
};

export default Navigator;