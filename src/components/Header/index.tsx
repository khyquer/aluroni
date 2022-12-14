import styles from './Header.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';

const Header = ({title} : {title: string}) => {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.header__text}>
					{title}
				</div>
			</header>
		</>
	);
};

export default Header;