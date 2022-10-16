import {useState} from "react";
import styles from './Menu.module.scss';
import Search from 'pages/Menu/Search';
import Filters from "pages/Menu/Filters";
import Ordener from "./Ordener";
import Itens from "./Itens";

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterSelect, setFilterSelect] = useState<number | null>(null);
    const [ordener, setOrdener] = useState('');

    return (           
        <section className={styles.menu}>
            <h3 className={styles.manu__title}>Cardápio</h3>
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
    )
}

export default Menu;