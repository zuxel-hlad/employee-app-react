import { useEmployeesContext } from '../employee-provider/employee-provider';
import './app-info.css';

const AppInfo = () => {
  const { renderedEmployees } = useEmployeesContext();
  const rewarded = renderedEmployees.filter(
    (employee) => employee.increase
  ).length;

  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {renderedEmployees.length}</h2>
      <h2>Премию получат: {rewarded}</h2>
    </div>
  );
};

export default AppInfo;
