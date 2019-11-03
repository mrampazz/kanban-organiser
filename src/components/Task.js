import React from 'react';
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
                <h3>Task Title</h3>
                <a>Show content</a>
            </div>
        );
    }
}


export default Task;