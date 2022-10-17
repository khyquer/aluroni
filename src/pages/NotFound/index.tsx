import stylesTheme from 'styles/Theme.module.scss';
import styles from './NotFound.module.scss';
import classNames from 'classnames';
import {ReactComponent as NotFoundImage} from 'assets/not_found.svg';
import Button from 'components/Button';
import { useNavigate } from 'react-router-dom';
import Navigator from 'components/Navigator';


const NotFound = () => {
	const navigate = useNavigate();

	return (
		<>
			<Navigator />
			<section className={classNames({
				[styles.container]:true,
				[stylesTheme.container]:true
			})}>
				<div className={styles.goBack}>
					<Button onClick={() => navigate(-1)}>
						Voltar
					</Button>
				</div>
				<NotFoundImage className={styles.image} />
			</section>
		</>
	);
};

export default NotFound;