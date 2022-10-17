import classNames from 'classnames';
import Button from 'components/Button';
import { useParams, useNavigate, Navigate  } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';
import Tags from 'components/Tags';
import NotFound from 'pages/NotFound';

const Dish = () => {
	const {id} = useParams();
	
	const navigate = useNavigate();

	const dish = menu.find(item => item.id === Number(id));
	if(!dish){
		return <Navigate to="/404" replace={true} />;
	}

	return (
		<section className={classNames({
			[stylesTheme.container]: true,
			[styles.container]: true
		})}>
			<Button
				className={stylesTheme.goBack}
				onClick={() => navigate(-1)}
			>
				{'< Voltar'}
			</Button>
			<h1 className={styles.title}>
				{dish.title}
			</h1>
			<div className={styles.image}>
				<img src={dish.photo} alt={dish.title} />
			</div>
			<div className={styles.content}>
				<p className={styles.content__description}>
					{dish.description}	
				</p>
			</div>
			<div className={styles.tags}>
				<Tags {...dish} />
			</div>
		</section>
	);
};

export default Dish;