import {Component} from "react";
import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0,
            id: 0,
            increase: false,
            like: false
        }
    }

    onSetEmployeeInfo = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCreateNewEmployee = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;
        const {createEmployee} = this.props;

        if(!name || !salary) return
        createEmployee({
            ...this.state,
        })

        this.setState({
            name: '',
            salary: 0
        })
    }



    render() {
        const {name, salary} = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={(e) => this.onCreateNewEmployee(e)}>
                    <input type="text"
                           name="name"
                           value={name}
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onSetEmployeeInfo}/>
                    <input type="number"
                           name="salary"
                           value={salary}
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onSetEmployeeInfo}/>

                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;