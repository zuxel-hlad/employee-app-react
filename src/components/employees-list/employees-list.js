import { useEmployeesContext } from '../employee-provider/employee-provider';
import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = () => {
  const { renderedEmployees } = useEmployeesContext();
  const employees = renderedEmployees.map((employee) => {
    return <EmployeesListItem {...employee} key={employee.id} />;
  });

  return (
    <>
      {employees.length ? (
        <ul className="app-list list-group">
          <div className="employee-table">
            <div className="employee-table-col lg">
              <h3>Имя сотрудника</h3>
            </div>
            <div className="employee-table-col sm">
              <h3>З/П$</h3>
            </div>
          </div>
          {employees}
        </ul>
      ) : (
        <h3 className="is-empty">Данные отсутствуют.</h3>
      )}
    </>
  );
};

export default EmployeesList;
