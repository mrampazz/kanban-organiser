import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../assets/Task.css';
import '../assets/Std.css';
// tutto è ovvio ma nulla è certo

class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-container task-bg">
                <h3>{this.props.title}</h3>
                <FontAwesomeIcon icon={faTimesCircle} size="2x" onClick={() => this.props.onDelete(this.props.id)}/>
                <FontAwesomeIcon icon={faPlusCircle} size="2x" onClick={() => this.props.onMove(this.props.colID+1, this.props.id)}/>
                <a> MOVE ME TO SECOND COLUMN </a>
                <a>Show content</a>
            </div>
        );
    }
}


export default Task;