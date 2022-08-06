import "./app-filter.css";

const AppFilter = (props) => {
    const {filter, setEmployeesFilter} = props;
    const buttonSettings = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'increase', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
        {name: 'liked', label: 'Самые старательные'}
    ];
    const setFilter = (filterString) => {
        setEmployeesFilter(filterString)
    };
    const filtersButtons = buttonSettings.map(({name, label}) => {
        const activeClass = filter === name ? 'btn-light' : 'btn-outline-light'
        return <button
                className={`btn ${activeClass}`}
                onClick={() => setFilter(name)}
                key={name}>
                {label}
                </button>
    });

    return (
        <div className="btn-group">
            {filtersButtons}
        </div>
    );
}

export default AppFilter;