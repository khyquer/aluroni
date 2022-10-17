import Tags from 'components/Tags';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/Dish';
import styles from './Item.module.scss';

interface Props {
    title: string,
    description: string,
    photo: string,
    size: number,
    serving: number,
    price: number,
    id: number,
    category: {
        id: number,
        label: string
    }
}

const Item = (props : Props) => {
	const {title, description, photo, size, serving, price, category} = props;

	const navigate = useNavigate();
	
	function redirectToDetails(dish: Dish){
		navigate(`/dish/${dish.id}`, { state: { dish } });
	}

	return (
		<div className={styles.item}>
			<div className={styles.item__image}>
				<img src={photo} alt="imagem" onClick={() => redirectToDetails(props)} />
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2 onClick={() => redirectToDetails(props)}>{title}</h2>
					<p onClick={() => redirectToDetails(props)}>{description}</p>
				</div>
				<Tags {...props} />			
			</div>
		</div>
	);
};

export default Item;