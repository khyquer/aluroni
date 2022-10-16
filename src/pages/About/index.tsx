import stylesTheme from 'styles/Theme.module.scss';
import styles from './About.module.scss';
import house from 'assets/about/casa.png';
import massa1 from 'assets/about/massa1.png';
import massa2 from 'assets/about/massa2.png';


const About = () => {

	const massas = [massa1, massa2];

	return (
		<section className={stylesTheme.container}>
			<h3 className={stylesTheme.title}>Sobre</h3>
			<div className={styles.aboutUs}>
				<img src={house} alt="Nossa casa" />				
				<div className={styles.aboutUs__text}>
					<p>Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!</p>
					<p>
						Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
					</p>
					<p>
						Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
					</p>
				</div>
			</div>
			<div className={styles.images}>
				{massas.map((massa, index) => (
					<img key={index} src={massa}  className={styles.images__image} />
				))}
			</div>
		</section>
	);
};

export default About;