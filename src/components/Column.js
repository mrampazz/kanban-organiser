
import React from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import '../assets/Column.css';
import '../assets/Std.css';

class Column extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
               {id: 1, title: "First task"},
               {id: 1, title: "Second task"},
               {id: 1, title: "Third task"},
               {id: 2, title: "Fourth task"},
               {id: 2, title: "Fifth task"},
               {id: 3, title: "Sixth task"},
           ]
        }
    }

    filterArray = taskId => {
        const objects = this.state.tasks.filter(item => item.id === taskId);
        return objects;
    }

    handleCreateTask = () => {
        const objects = this.state.tasks;
        objects.push({id: this.props.id, title: "asd"});
        this.setState({tasks: objects});
    }

    handleDeleteTask = taskTitle => {
        const objects = this.state.tasks.filter(item => item.title !== taskTitle);
        this.setState({tasks: objects});
    }




    render() { 
        const filteredItems = this.filterArray(this.props.id).map(item => (
            <Task 
                key = {item.id}
                id = {item.id}
                title = {item.title}
                onDelete={this.handleDeleteTask}
            />
        ))
           
        let contentClass = ["column-content"];
        if(this.props.id % 2 === 0) {
            contentClass.push('content-bg1');
        } else {
            contentClass.push('content-bg2');
        }
        return (
            <div className="column text-color">
                <div className="column-header task-bg">
                    <h2 className="title" >{this.props.txt}</h2>
                    <FontAwesomeIcon className="button" icon={faTimesCircle} size="2x" onClick={() => this.props.onDelete(this.props.id)} />
                </div>
                <div className={contentClass.join(' ')}>
                    {filteredItems}
                    <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="2x" onClick={this.handleCreateTask}></FontAwesomeIcon>
                </div>
            </div>
        );
    }
}

export default Column; 