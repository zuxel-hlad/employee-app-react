import {
  createContext,
  useContext,
  useState,
  useEffect,
  ueseMemo,
  useMemo,
} from 'react';

const EmployeesContext = createContext(null);
export const useEmployeesContext = () => useContext(EmployeesContext);

export const EmployeesProvider = ({ children }) => {
  const [data, setData] = useState([
    // {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
    // {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
    // {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  //get employees from when app start
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('employees'))) {
      setData(...data, []);
    } else {
      setData([...JSON.parse(localStorage.getItem('employees'))]);
    }
  }, []);

  // set employees to localStorage when employees arr updated
  useEffect(
    () => localStorage.setItem('employees', JSON.stringify(data)),
    [data]
  );

  //delete employee
  const deleteItem = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  //create employee
  const createEmployee = (payload) => {
    payload.id = 'id' + Math.random().toString(16).slice(2);
    setData([...data, payload]);
  };

  //toggle employee salary or increase
  const onToggleProp = (id, prop) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };

  //change employee salary
  const changeEmployeeSalary = (id, newSalary) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return { ...item, salary: newSalary };
        }
        return item;
      })
    );
  };

  //search employee in employees arr
  const searchEmployees = (array, query) => {
    console.log('search');
    if (!query.length) {
      return array;
    } else {
      return array.filter(
        (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }
  };

  //change search query, and then employees will be filtered
  const changeSearchQuery = (query) => {
    setSearchQuery(query);
  };

  //choose filter type for employees
  const filterEmployees = (employees, filter) => {
    if (filter.indexOf('all') > -1) {
      return employees;
    } else if (filter.indexOf('salary') > -1) {
      return employees.filter((employee) => employee.salary >= 1000);
    } else if (filter.indexOf('increase') > -1) {
      return employees.filter((employee) => employee.increase);
    } else if (filter.indexOf('liked') > -1) {
      return employees.filter((employee) => employee.like);
    }
  };

  //change filter word
  const setEmployeesFilter = (filter) => {
    setFilter(filter);
  };

  //searched and filtered employees for render
  const renderedEmployees = filterEmployees(
    searchEmployees(data, searchQuery),
    filter
  );

  console.log(renderedEmployees);

  return (
    <EmployeesContext.Provider
      value={{
        renderedEmployees,
        changeSearchQuery,
        searchQuery,
        setEmployeesFilter,
        filter,
        createEmployee,
        deleteItem,
        changeEmployeeSalary,
        onToggleProp,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
