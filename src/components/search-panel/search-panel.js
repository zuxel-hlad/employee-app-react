import { useEmployeesContext } from '../employee-provider/employee-provider';
import './search-panel.css';

const SearchPanel = () => {
  const { changeSearchQuery, searchQuery } = useEmployeesContext();

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => changeSearchQuery(e.target.value)}
      className="form-control search-input"
      placeholder="Найти сотрудника"
    />
  );
};

export default SearchPanel;
