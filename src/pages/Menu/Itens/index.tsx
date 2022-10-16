import itens from './itens.json';
import Item from './Item';
import styles from './Itens.module.scss';
import {useEffect, useState} from "react";
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
    
    useEffect(() => {
        const newLista = itens.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(newLista);
    }, [searchQuery, filterSelect])

    return (
        <div className={styles.itens}>
            {list.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    )
}

export default Itens;