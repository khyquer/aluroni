import styles from './Navigator.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import {Link} from 'react-router-dom';

const Navigator = () => {

	const routes =  [{
		label: 'Início',
		to: '/'
	}, {
		label: 'Menu',
		to: '/menu'
	}, {
		label: 'Sobre',
		to: '/sobre'
	}];

	return (
		<nav className={styles.navigator}>
			<Logo />
			<ul className={styles.navigator__list}>
				{routes.map((route, index) => (
					<li key={index} className={styles.navigator__link}>
						<Link to={route.to}>
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigator;