import itens from 'data/menu.json';
import Item from './Item';
import styles from './Itens.module.scss';
import {useEffect, useState} from 'react';
import { Menu } from 'types/dish';

interface Props {
    searchQuery: string,
    filterSelect: number | null,
    ordener: string
}

const Itens = (props : Props) => {
	const [list, setList] = useState(itens);

	const {searchQuery, filterSelect, ordener} = props;
    
	function testSearch(title: string){
		const regex = new RegExp(searchQuery, 'i');
		return regex.test(title);
	}

	function testFilter(categoriaId: number){      
		if(filterSelect !== null) return filterSelect === categoriaId;

		return true;
	}

	function orderBy(newList: Menu){
		switch (ordener) {
		case 'portion':
			return newList.sort((a, b) => a.size > b.size ? 1 : -1);
		case 'amountpeople':
			return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
		case 'price':
			return newList.sort((a, b) => a.price > b.price ? 1 : -1);
		default:
			return newList;
		}
	}
    
	useEffect(() => {
		const newList = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
		setList(orderBy(newList));
	}, [searchQuery, filterSelect, ordener]);

	return (
		<div className={styles.itens}>
			{list.map(item => (
				<Item key={item.id} {...item}/>
			))}
		</div>
	);
};

export default Itens;