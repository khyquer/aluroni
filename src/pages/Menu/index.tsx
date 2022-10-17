import {useState} from 'react';
import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';

import Search from 'pages/Menu/Search';
import Filters from 'pages/Menu/Filters';
import Ordener from './Ordener';
import Itens from './Itens';
import classNames from 'classnames';

const Menu = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [filterSelect, setFilterSelect] = useState<number | null>(null);
	const [ordener, setOrdener] = useState('');

	return (           
		<section className={classNames({
			[styles.menu]: true,
			[stylesTheme.container]: true
		})}>
			<h3 className={stylesTheme.title}>Cardápio</h3>
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery} 
			/>
			<div className={styles.menu__filters}>
				<Filters 
					filterSelect={filterSelect}
					setFilterSelect={setFilterSelect}
				/>
				<Ordener ordener={ordener} setOrdener={setOrdener} />
			</div>
			<Itens searchQuery={searchQuery} filterSelect={filterSelect} ordener={ordener} />
		</section>
	);
};

export default Menu;