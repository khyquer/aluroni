import stylesTheme from 'styles/Theme.module.scss';
import styles from './NotFound.module.scss';
import classNames from 'classnames';
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg';


const NotFound = () => {

	return (
		<section className={classNames({
			[styles.container]:true
		})}>
			<NotFoundImage />
		</section>
	);
};

export default NotFound;