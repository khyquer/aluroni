import Button from 'components/Button';
import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import imgOurHome from 'assets/home/our_home.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Dish } from 'types/dish';

const Home = () => {
	const location = useLocation();

	const [recommendedDish, setRecommendedDish] = useState([...menu]);

	const navigate = useNavigate();

	useEffect(() => {
		setRecommendedDish(
			recommendedDish.sort(() => (Math.random() > 0.5 ? 0 : -1)
			).splice(0, 3));
	}, [location]);

	function redirectToDetails(dish: Dish){
		navigate(`/dish/${dish.id}`, { state: { dish } });
	}

	return (
		<section className={stylesTheme.container}>
			<h3 className={stylesTheme.title}>Recomendações</h3>
			<div className={styles.recommendeds}>
				{recommendedDish.map((item) => (
					<div key={item.id} className={styles.recommended}>
						<div key={item.id} className={styles.recommended__image}>
							<img
								src={item.photo}
								alt={item.title}
								title={item.title}
								onClick={() => redirectToDetails(item)}
							/>
						</div>
						<Button 
							className={styles.recommended__button}
							onClick={() => redirectToDetails(item)}
						>
							Ver mais
						</Button>
					</div>
				))}
			</div>
			<h3 className={stylesTheme.title}>Nossa Casa</h3>
			<div className={styles.ourHome}>
				<img src={imgOurHome} alt="Casa Aluroni" />
				<div className={styles.ourHome__address}>
					Rua dos Bobos, nº 0<br /><br />
					Neverland - LOL
				</div>
			</div>
		</section>
	);
};

export default Home;