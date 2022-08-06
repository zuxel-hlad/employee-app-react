import {Component} from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: ''
        }
    }

    setSearchQuery = (event) => {

        const searchQuery = event.target.value
        this.setState(({searchQuery}))
        const {setSearchQuery} = this.props;
        setSearchQuery(searchQuery)


    }

    render() {
        const {searchQuery} = this.state;
        return (
            <input type="text"
                   value={searchQuery}
                   onChange={this.setSearchQuery}
                   className="form-control search-input"
                   placeholder="Найти сотрудника"/>
        )
    }
}

export default SearchPanel;