import React from "react";
import styles from './Search.module.scss';
import {CgSearch} from 'react-icons/cg';

interface Props {
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({searchQuery, setSearchQuery}: Props) => {
 return (
    <div className={styles.search}>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar"
      />
      <CgSearch 
        size={20}
        color="#4C4D5E"
      />
    </div>
 )
}

export default Search