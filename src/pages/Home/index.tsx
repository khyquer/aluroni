import Button from 'components/Button';
import menu from 'data/menu.json';
import styles from './Home.module.scss';

const Home = () => {
	let recommendedDish = [...menu];
	recommendedDish = recommendedDish.sort(() => 0.5 * Math.random()).splice(0, 3);

	return (
		<section>
			<h3 className={styles.title}>Recomendações</h3>
			<div>
				{recommendedDish.map((item) => (
					<div key={item.id} className={styles.recommended}>
						<div key={item.id} className={styles.recommended__image}>
							<img src={item.photo} alt={item.title} />
						</div>
						<Button className={styles.recommended__button}>
							Ver mais
						</Button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Home;