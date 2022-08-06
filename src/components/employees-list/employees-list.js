import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, deleteItem, onToggleProp, changeEmployeeSalary}) => {
    const employees = data.map((employee) => {
        const {id, ...otherProps} = employee;
        return <EmployeesListItem
            {...otherProps}
            key={id}
            id={id}
            deleteItem={() => deleteItem(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-prop'))}
            changeEmployeeSalary={changeEmployeeSalary}/>
    });

    return (
        <>
            {employees.length ? <ul className="app-list list-group">
                    <div className="employee-table">
                        <div className="employee-table-col lg">
                            <h3>Имя сотрудника</h3>
                        </div>
                        <div className="employee-table-col sm">
                            <h3>З/П$</h3>
                        </div>
                    </div>
                    {employees}
            </ul> :
                <h3 className="is-empty">Данные отсутствуют.</h3>}
        </>
    )
};

export default EmployeesList;
