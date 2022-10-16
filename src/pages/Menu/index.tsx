import {useState} from "react";
import styles from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import Search from 'pages/Search';
import Filters from "pages/Filters";

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterSelect, setFilterSelect] = useState<number | null>(null)

    return (
        <main>
            <nav className={styles.Menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
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
                </div>
            </section>
        </main>
    )
}

export default Menu;