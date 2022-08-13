import { useEmployeesContext } from '../employee-provider/employee-provider';
import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, increase, like, id }) => {
  const { changeEmployeeSalary, onToggleProp, deleteItem } =
    useEmployeesContext();

  let isRewarded = increase ? 'increase' : '';
  let isLiked = like ? 'like' : '';

  const setEmployeeSalary = (e) => {
    const newSalary = e.target.value;
    changeEmployeeSalary(id, newSalary);
  };
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${isRewarded} ${isLiked}`}
    >
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-prop="like"
      >
        {name}
      </span>
      <input
        type="number"
        className="list-group-item-input"
        defaultValue={salary}
        onChange={setEmployeeSalary}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={(e) =>
            onToggleProp(id, e.currentTarget.getAttribute('data-prop'))
          }
          data-prop="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button
          type="button"
          className="btn-trash btn-sm "
          onClick={() => deleteItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
