import React from 'react';
import '../assets/Column.css';

class Column extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column">
                <div className="column-header">
                    <span>{this.props.txt}</span>
                    <button onClick={() => this.props.removeCol(this.props.pippo.id)}>Remove this Column</button>
                </div>
                <div className="column-content">
                    First Column Content
                </div>
            </div>
        );
    }
}

export default Column; 