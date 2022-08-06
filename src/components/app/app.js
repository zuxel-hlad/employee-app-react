import {Component} from "react";
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material';
import {ExpandMore as ExpandMoreIcon} from '@mui/icons-material';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                // {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                // {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                // {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            searchQuery: '',
            filter: 'all'
        }
    }

    componentDidMount() {
        this.setState((state) => {
            if (JSON.parse(localStorage.getItem('employees')) === null) {
                return {
                    data: state.data = []
                }
            } else {
                return {
                    data: state.data = [...JSON.parse(localStorage.getItem('employees'))]
                }
            }
        })
    }

    componentDidUpdate() {
        localStorage.setItem('employees', JSON.stringify(this.state.data))
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {data: data.filter(user => user.id !== id)}
        })
    }

    createEmployee = (payload) => {
        this.setState(({data}) => {
            payload.id = "id" + Math.random().toString(16).slice(2);
            return {
                data: [...data, payload]
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    changeEmployeeSalary = (id, newSalary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: newSalary}
                }
                return item
            })
        }))
    }

    searchEmployees = (array, query) => {
        if (!query.length) {
            return array
        } else {
            return array.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        }
    }

    setSearchQuery = (query) => {
        this.setState({searchQuery: query})
    }

    filterEmployees = (employees, filter) => {
        if (filter.indexOf('all') > -1) {
            return employees
        } else if (filter.indexOf('salary') > -1) {
            return employees.filter(employee => employee.salary >= 1000)
        } else if (filter.indexOf('increase') > -1) {
            return employees.filter(employee => employee.increase)
        } else if (filter.indexOf('liked') > -1) {
            return employees.filter(employee => employee.like)
        }
    }

    setEmployeesFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, searchQuery, filter} = this.state;
        const rewarded = data.filter(employee => employee.increase).length;
        const renderedEmployees = this.filterEmployees(this.searchEmployees(data, searchQuery), filter)
        return (
            <div className="app">
                <AppInfo
                    totalEmployees={data.length}
                    rewarded={rewarded}/>
                <div className="search-panel">
                    <SearchPanel setSearchQuery={this.setSearchQuery}/>
                    <AppFilter
                        setEmployeesFilter={this.setEmployeesFilter}
                        filter={filter}
                    />
                </div>
                <EmployeesList
                    data={renderedEmployees}
                    deleteItem={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    changeEmployeeSalary={this.changeEmployeeSalary}/>
                <EmployeesAddForm createEmployee={this.createEmployee}/>
                <div className="accordion">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Disabled Accordion</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
            </div>
        );
    }
}

export default App;
