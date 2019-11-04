import React from 'react';
import Task from './Task';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faPlusCircle, faWrench } from '@fortawesome/free-solid-svg-icons'
import '../assets/Column.css';
import '../assets/Std.css';

class Column extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            editText: '',
            setEditing: false,
            tasks: []
        }
    }

    filterArray = taskId => {
        const objects = this.state.tasks.filter(item => item.refId === taskId);
        return objects;
    }

    handleCreateTask = () => {
        const objects = this.state.tasks;

        if(objects.length == 0) {
            objects.push({refId: this.props.id, id: 1, title: "asd"});
        } else {
            const obj = objects[objects.length-1];
            objects.push({refId: this.props.id, id: obj.id+1, title: "asd"});
        }
        
        this.setState({tasks: objects});
    }

    handleDeleteTask = taskTitle => {
        const objects = this.state.tasks.filter(item => item.title !== taskTitle);
        this.setState({tasks: objects});
    }

    handleEditMode = () => {
        this.setState({setEditing: true});
    }

    handleChange = (e) => {
        this.setState({editText: e.target.value});
    }

    handleSubmit = (e) => {
        this.setState({setEditing: false}); 
        this.props.onEdit(this.props.id, this.state.editText);
        e.preventDefault();
    }


    renderNormal = () => {
        const filteredItems = this.filterArray(this.props.id).map(item => (
            <Task 
                key = {item.id}
                refId = {this.props.id}
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
                    <div className="header-title">
                        <FontAwesomeIcon className="edit-button" icon={faWrench} onClick={this.handleEditMode}></FontAwesomeIcon>
                        <h2 className="title">{this.props.txt}</h2>                    
                    </div>
                    <FontAwesomeIcon className="button" icon={faTimesCircle} size="2x" onClick={() => this.props.onDelete(this.props.id)} />
                </div>
                <div className={contentClass.join(' ')}>
                    {filteredItems}
                    <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="2x" onClick={this.handleCreateTask}></FontAwesomeIcon>
                </div>
            </div>
        );
    }

    renderInput = () => {
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
                    <form onSubmit={this.handleSubmit} >
                        <input className="title input-text" placeholder={this.props.txt} onChange={this.handleChange}></input>
                    </form>
                    <FontAwesomeIcon className="button" icon={faTimesCircle} size="2x" onClick={() => this.props.onDelete(this.props.id)} />
                </div>
                <div className={contentClass.join(' ')}>
                    {filteredItems}
                    <FontAwesomeIcon className="add-button" icon={faPlusCircle} size="2x" onClick={this.handleCreateTask}></FontAwesomeIcon>
                </div>
            </div>
        );
    }


    render() { 
        if(this.state.setEditing) {
            return this.renderInput();
        } else {
            return this.renderNormal();
        }
    }
}

export default Column; 