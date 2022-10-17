import Tags from 'components/Tags';
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
	return (
		<div className={styles.item}>
			<div className={styles.item__image}>
				<img src={photo} alt="imagem" />
			</div>
			<div className={styles.item__description}>
				<div className={styles.item__title}>
					<h2>{title}</h2>
					<p>{description}</p>
				</div>
				<Tags {...props} />
			</div>
		</div>
	);
};

export default Item;