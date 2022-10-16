import styles from './Footer.module.scss';

import { BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles['footer-company']}>
				<h2>Aluraflix</h2>
				<p>@khyquer</p>

			</div>
			<ul className={styles.footer__ul} >
				<li className={styles.footer__ul__li} >
					<a className={styles.footer__ul__li__a} href="https://www.alura.com.br/">Alura</a>
					<a className={styles.footer__ul__li__a} href="https://www.alura.com.br/curso-online-react-arquivos-estaticos">Curso</a>
					<a className={styles.footer__ul__li__a} href="https://cursos.alura.com.br/user/lfrprazeres">Instrutor</a>
				</li>
			</ul>
			<section className={styles.social} >
				<a className={styles.footer__ul__li__a} href="https://github.com/khyquer/aluroni"><BsGithub size={20} /> Meu código</a>
				<a className={styles.footer__ul__li__a} href="https://github.com/lfrprazeres/aluroni-introducao"><BsGithub size={20} /> Código fonte da aula</a>
			</section>
		</footer>
	)
}

export default Footer