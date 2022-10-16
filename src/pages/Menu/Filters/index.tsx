import filters from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

interface IOption {
    id: number,
    label: string
}

interface Props {
    filterSelect: number | null,
    setFilterSelect: React.Dispatch<React.SetStateAction<number | null>>
}

const Filters = ({filterSelect, setFilterSelect}: Props) => {
    function selectFilter(option: IOption){
        if(filterSelect === option.id) return setFilterSelect(null);

        return setFilterSelect(option.id);
    }

    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button
                    className={
                        classNames({
                            [styles.filters__filter]: true,                            
                            [styles["filters__filter--active"]]: filterSelect === option.id
                        })
                    }
                    key={option.id} 
                    onClick={() => selectFilter(option)}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}

export default Filters