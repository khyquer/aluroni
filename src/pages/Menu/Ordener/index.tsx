import styles from './Ordener.module.scss';
import options from './options.json';
import { useState } from 'react';
import classNames from 'classnames';
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md';

interface Props {
    ordener: string,
    setOrdener: React.Dispatch<React.SetStateAction<string>>
}

const Ordener = ({ordener, setOrdener}: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const nameOrdener = ordener && options.find(option => option.value === ordener)?.name;
    
	return (
		<button className={classNames({
			[styles.ordener]: true,
			[styles['ordener--active']] : ordener !== ''
		})}
		onClick={() => setIsOpen(!isOpen)}
		onBlur={() => setIsOpen(false)}
		>
			<span>{nameOrdener || 'Ordenar por'}</span>
			{isOpen ? (
				<MdKeyboardArrowUp size={20} />
			) : ( 
				<MdKeyboardArrowDown size={20} />
			) }
			<div className={classNames({
				[styles.ordener__options]: true,
				[styles['ordener__options--active']]: isOpen
			})}>
				{options.map(option => (
					<div
						className={styles.ordener__option}
						key={option.value}
						onClick={() => setOrdener(option.value)}    
					>
						{option.name}
					</div>
				))}
			</div>
		</button>
	);
};

export default Ordener;