import { useState } from 'react';
import { useEmployeesContext } from '../employee-provider/employee-provider';
import './employees-add-form.css';

const EmployeesAddForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    salary: 0,
    id: 0,
    increase: false,
    like: false,
  });
  const { createEmployee } = useEmployeesContext();

  const onSetEmployeeInfo = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const onCreateNewEmployee = (e) => {
    e.preventDefault();
    const { name, salary } = employee;

    if (!name || !salary) return;
    createEmployee({
      ...employee,
    });

    setEmployee({
      ...employee,
      name: '',
      salary: 0,
    });
  };

  const { name, salary } = employee;
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex"
        onSubmit={(e) => onCreateNewEmployee(e)}
      >
        <input
          type="text"
          name="name"
          value={name}
          className="form-control new-post-label"
          placeholder="Как его зовут?"
          onChange={onSetEmployeeInfo}
        />
        <input
          type="number"
          name="salary"
          value={salary}
          className="form-control new-post-label"
          placeholder="З/П в $?"
          onChange={onSetEmployeeInfo}
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
