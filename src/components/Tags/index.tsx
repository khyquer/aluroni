import classNames from 'classnames';
import Button from 'components/Button';
import { useParams, useNavigate } from 'react-router-dom';
import stylesTheme from 'styles/Theme.module.scss';
import styles from './Tags.module.scss';
import menu from 'data/menu.json';
import {Dish} from 'types/Dish';

const Tags = ({category, price, serving, size}: Dish) => {

	return (
		<div className={styles.tags}>
			<div className={classNames({					
				[styles.tags__type]: true,
				[styles[`tags__type__${category.label.toLocaleLowerCase()}`]] :true
			})}>
				{category.label}	
			</div>
			<div className={styles.tags__size}>
				{size}g
			</div>
			<div className={styles.tags__amountpeople}>
                Serve {serving} pessoa{serving === 1 ? '' : 's'}
			</div>
			<div className={styles.tags__price}>
                R$ {price.toFixed(2)}
			</div>
		</div>
	);
};

export default Tags;