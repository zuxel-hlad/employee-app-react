import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { EmployeesProvider } from '../employee-provider/employee-provider';
import './app.css';

const App = () => {
  return (
    <EmployeesProvider>
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList />
        <EmployeesAddForm />
      </div>
    </EmployeesProvider>
  );
};

export default App;
