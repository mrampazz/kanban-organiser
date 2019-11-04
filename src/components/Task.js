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
                <a>Show content</a>
            </div>
        );
    }
}


export default Task;