import React from 'react';
import '../assets/Dropdown.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const items = this.props.colList.map(item => (
            <div className="list-item" onClick={e => this.props.handleMoveTask(e, "value")}>
                <li key = {item.id} >
                    Column: 
                    <a>
                        {item.id}
                    </a>
                </li>
            </div>
        ));
        
        return(
            <div className="dropdown">
                {
                this.props.isOpen ? 
                <div className="outer-link-container">
                    <div className="link-container">
                        {items}
                    </div>
                </div>
                :
                null
                }
            </div>
        );
    }
}

export default Dropdown;