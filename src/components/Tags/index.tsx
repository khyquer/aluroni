import classNames from 'classnames';
import styles from './Tags.module.scss';
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