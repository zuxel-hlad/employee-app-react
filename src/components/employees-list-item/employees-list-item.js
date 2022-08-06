// import './employees-list-item.css';
import styled from "styled-components";

const EmployeesListItem = (props) => {
    const {
        name,
        salary,
        deleteItem,
        onToggleProp,
        changeEmployeeSalary,
        increase,
        like,
        id,
    } = props;
    let isRewarded = increase ? 'increase' : '';
    let isLiked = like ? 'like' : '';

    const setEmployeeSalary = (e) => {
        const newSalary = e.target.value;
        changeEmployeeSalary(id, newSalary)
    }
    // className={`list-group-item d-flex justify-content-between ${isRewarded} ${isLiked}`}
    return (
        <ListItem className={[isRewarded, isLiked]} test>
                <span
                    className="list-group-item-label"
                    onClick={onToggleProp} data-prop="like">
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
                    onClick={onToggleProp} data-prop="increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button
                    type="button"
                    className="btn-trash btn-sm "
                    onClick={deleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </ListItem>
    );
};

export default EmployeesListItem;


const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-bottom: 1px solid #3d5a80;
  background: #fff;
  color: ${props => props.test ? '#000' : '#ff0090'};
  
  @media screen and (max-width: 1200px) {
    //display: none;
  }
  &:last-child {
    border-bottom: none;
  }

  span {
    line-height: 35px;
    font-size: 20px;
    cursor: pointer;
    min-width: 550px;
  }

  input {
    line-height: 35px;
    font-size: 20px;
    text-align: center;
    border: 0;
  }

  button {
    width: 35px;
    height: 35px;
    margin: 3px;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  .btn-cookie {
    color: #e09f3e;
  }

  .btn-trash {
    color: #e5383b;
  }

  .fa-star {
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    color: #FFD700;
    transition: 0.3s all;
    transform: translateX(30px);
    opacity: 0;
  }

  &.like .fa-star {
    opacity: 1;
    transform: translateX(0px);
  }

  &.increase .list-group-item-label,
  &.increase .list-group-item-input {
    color: #e09f3e;
  }

  &.increase .btn-star {
    color: #aeaeae;
  }
`
