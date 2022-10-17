import classNames from 'classnames';
import Button from 'components/Button';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Dish.module.scss';
import menu from 'data/menu.json';

const Dish = () => {
	const navigate = useNavigate();
	const {state} = useLocation();
	const {dish} = state as {dish: typeof menu[0]};

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
				<div className={classNames({					
					[styles.tags__type]: true,
					[styles[`tags__type__${dish.category.label.toLocaleLowerCase()}`]] :true
				})}>
					{dish.category.label}	
				</div>
				<div className={styles.tags__portion}>
					{dish.size}g
				</div>
				<div className={styles.tags__amountpeople}>
					Serve {dish.serving} pessoa{dish.serving === 1 ? '' : 's'}
				</div>
				<div className={styles.tags__price}>
					R$ {dish.price.toFixed(2)}
				</div>
			</div>
		</section>
	);
};

export default Dish;