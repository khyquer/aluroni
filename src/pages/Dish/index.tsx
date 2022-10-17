import classNames from 'classnames';
import Button from 'components/Button';
import { useParams, useNavigate } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';
import Tags from 'components/Tags';

const Dish = () => {
	const {id} = useParams();
	
	const navigate = useNavigate();

	const dishes = menu.find(item => item.id === Number(id)) || {
		title: '1',
		description: '1',
		photo: '1',
		size: 1,
		serving: 1,
		price: 1,
		id: 1,
		category: {
			id: 1,
			label: '1',
		}
	};

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
				{dishes.title}
			</h1>
			<div className={styles.image}>
				<img src={dishes.photo} alt={dishes.title} />
			</div>
			<div className={styles.content}>
				<p className={styles.content__description}>
					{dishes.description}	
				</p>
			</div>
			<div className={styles.tags}>
				<Tags {...dishes} />
			</div>
		</section>
	);
};

export default Dish;